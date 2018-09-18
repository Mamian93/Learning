using RightEnergyPlatform.Data;
using RightEnergyPlatform.Data.Entities;
using RightEnergyPlatform.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace RightEnergyPlatform.Services
{
    public interface ICurrentEnergyPrice
    {
        void BulkInsert(List<PriceAmountFlow> list);
        void DeleteOldData();
        Task ExecuteCallAsync();
        void SaveDataToDb(string content, int IdOfCountry);
        List<PriceViewModel> GetAllPrice();
    }

    public class CurrentEnergyPrice : ICurrentEnergyPrice
    {
        private static HttpClient _client = new HttpClient();
        private IUrlBuilder _urlBuilder;
        private RightDbContext _context;
        private IGetPriceDataCountryLoop _getPriceData;

        public CurrentEnergyPrice(IUrlBuilder urlBuilder,
                                    RightDbContext context,
                                    IGetPriceDataCountryLoop getPriceData)
        {
            _urlBuilder = urlBuilder;
            _context = context;
            _getPriceData = getPriceData;
        }

        public async Task ExecuteCallAsync()
        {
            //Get list with URL
            var responseNewURL = _urlBuilder.GetUrlPrice();
            DeleteOldData();

            foreach (var urlAsk in responseNewURL)
            {
                //Get Data 
                var response = await _client.GetAsync(urlAsk.Value);
                if (response.IsSuccessStatusCode)
                {
                    //Read the Data
                    var xDoc = XDocument.Load(await response.Content.ReadAsStreamAsync());

                    var placeHolder = xDoc.ToString();

                    SaveDataToDb(placeHolder, urlAsk.Key);
                                  
                }
            }
        }

        public void SaveDataToDb(string content, int IdOfCountry)
        {
            List<PriceAmountFlow> Result = new List<PriceAmountFlow>();

            if (IdOfCountry == 1)
            {
                XElement xdocUK = XElement.Parse(content);
                XElement cleanDoc = RemoveAllNamespaces(xdocUK);               
                DateTimeProvider timeProvider = new DateTimeProvider(cleanDoc);
                Result = _getPriceData.CountryGetDataPrice24Records(cleanDoc, timeProvider, IdOfCountry);
               

            }
            else if (IdOfCountry == 2)
            {
                XElement xdocIRL = XElement.Parse(content);
                XElement cleanDoc2 = RemoveAllNamespaces(xdocIRL);
                DateTimeProvider timeProvider = new DateTimeProvider(cleanDoc2);
                Result = _getPriceData.CountryGetDataPrice48Records(cleanDoc2, timeProvider, IdOfCountry);
            }
           

            BulkInsert(Result);
        }

        private XElement RemoveAllNamespaces(XElement xdoc)
        {
            if (!xdoc.HasElements)
            {
                XElement xElement = new XElement(xdoc.Name.LocalName);
                xElement.Value = xdoc.Value;

                foreach (XAttribute attribute in xdoc.Attributes())
                    xElement.Add(attribute);

                return xElement;
            }
            return new XElement(xdoc.Name.LocalName, xdoc.Elements().Select(el => RemoveAllNamespaces(el)));
        }

        public void BulkInsert(List<PriceAmountFlow> list)
        {
            try
            {
                foreach (var item in list)
                {
                    _context.Add(item);
                }
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new ApplicationException(ex.Message.ToString());
            }
        }

        public void DeleteOldData()
        {
            try
            {
                var remove = _context.PriceAmountFlows.Select(x => x)
                                                        .ToList();

                _context.PriceAmountFlows.RemoveRange(remove);
                _context.SaveChanges();

            }
            catch (Exception ex)
            {
                throw new ApplicationException(ex.Message.ToString());
            }
        }

        public List<PriceViewModel> GetAllPrice()
        {

            var DbModel = _context.PriceAmountFlows.Select(c => c).OrderBy(c => c.Time);
            var VmModel = new PriceListViewModel().PriceListVM.ToList();
            var res = VmModel;
            foreach (var item in DbModel)
            {
                int index = res.FindIndex(val => val.Time == item.Time);
                if (index >= 0)
                {
                    if (item.CountryId == 1)
                    {
                        res.ElementAt(index).IRLPrice = item.Price;
                    }
                    else
                    {
                        res.ElementAt(index).UKPrice = item.Price;
                    }

                }
                else
                {
                    var VmEntity = new PriceViewModel();
                    VmEntity.Time = item.Time;
                    if (item.CountryId == 1)
                    {
                        VmEntity.IRLPrice = item.Price;
                    }
                    else
                    {
                        VmEntity.UKPrice = item.Price;

                    }

                    res.Add(VmEntity);
                }

            }
            return VmModel;
        }

    }
}
