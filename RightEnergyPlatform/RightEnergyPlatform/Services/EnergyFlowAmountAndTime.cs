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
    public interface IEnergyFlowAmountAndTime
    {
        void BulkInsert(List<AmountAndTimeOfEnergyFlow> list);
        void DeleteOldData();
        Task ExecuteCallAsync();
        void SaveDataToDb(string content, int IdOfCountry);
        List<AmountFlowViewModel> GetAllAmountFlowData();
        IEnumerable<AmountAndTimeOfEnergyFlow> GetAll();
    }

    public class EnergyFlowAmountAndTime : IEnergyFlowAmountAndTime
    {
        private static HttpClient _client = new HttpClient();
        private IUrlBuilder _urlBuilder;
        private RightDbContext _context;
        private IGetDataCountryFlowLoop _getDataCountryFlow;

        public EnergyFlowAmountAndTime(IUrlBuilder urlBuilder,
                                    RightDbContext context,
                                    IGetDataCountryFlowLoop getDataCountryFlow)
        {
            _urlBuilder = urlBuilder;
            _context = context;
            _getDataCountryFlow = getDataCountryFlow;
        }

        public void BulkInsert(List<AmountAndTimeOfEnergyFlow> list)
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
                var remove = _context.AmountAndTimeOfEnergyFlows.Select(x => x)
                                                        .ToList();

                _context.AmountAndTimeOfEnergyFlows.RemoveRange(remove);
                _context.SaveChanges();

            }
            catch (Exception ex)
            {
                throw new ApplicationException(ex.Message.ToString());
            }
        }

        public async Task ExecuteCallAsync()
        {
            //Get list with URL
            var responseNewURL = _urlBuilder.GetUrlAmountAndTimeFlow();
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
            List<AmountAndTimeOfEnergyFlow> Result = new List<AmountAndTimeOfEnergyFlow>();

            if (IdOfCountry == 1)
            {
                XElement xdocUK = XElement.Parse(content);
                XElement cleanDoc = RemoveAllNamespaces(xdocUK);
                DateTimeProvider timeProvider = new DateTimeProvider(cleanDoc);
                Result = _getDataCountryFlow.GetCountryData(cleanDoc, timeProvider, IdOfCountry);
            }
            else if (IdOfCountry == 2)
            {
                XElement xdocIRL = XElement.Parse(content);
                XElement cleanDoc2 = RemoveAllNamespaces(xdocIRL);
                DateTimeProvider timeProvider = new DateTimeProvider(cleanDoc2);
                Result = _getDataCountryFlow.GetCountryData(cleanDoc2, timeProvider, IdOfCountry);
            }
            else if (IdOfCountry == 3)
            {
                XElement xdocNIRL = XElement.Parse(content);
                XElement cleanDoc2 = RemoveAllNamespaces(xdocNIRL);
                DateTimeProvider timeProvider = new DateTimeProvider(cleanDoc2);
                Result = _getDataCountryFlow.GetCountryData(cleanDoc2, timeProvider, IdOfCountry);
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

        public IEnumerable<AmountAndTimeOfEnergyFlow> GetAll()
        {
            return _context.AmountAndTimeOfEnergyFlows.
                OrderBy(c => c.Time)
                .ToList();
        }

        public List<AmountFlowViewModel> GetAllAmountFlowData()
        {

            var DbModel = _context.AmountAndTimeOfEnergyFlows.Select(c => c).OrderBy(c => c.Time);
            var VmModel = new AmountFlowDataListViewModel().AmountFlowDataListVM.ToList();
            var res = VmModel;
            foreach (var item in DbModel)
            {
                int index = res.FindIndex(val => val.Time == item.Time);
                if (index >= 0)
                {
                    if (item.CountryId == 1)
                    {
                        res.ElementAt(index).UKFlowAmount = item.FlowAmount;
                    }
                    else if(item.CountryId == 2)
                    {
                        res.ElementAt(index).IRLFlowAmount = item.FlowAmount;
                    }
                    else
                    {
                        res.ElementAt(index).NIRLFlowAmount = item.FlowAmount;
                    }
                }
                else
                {
                    var VmEntity = new AmountFlowViewModel();
                    VmEntity.Time = item.Time;
                    if (item.CountryId == 1)
                    {
                        VmEntity.UKFlowAmount = item.FlowAmount;
                    }
                    else if(item.CountryId == 2)
                    {
                        VmEntity.IRLFlowAmount = item.FlowAmount;
                    }
                    else
                    {
                        VmEntity.NIRLFlowAmount = item.FlowAmount;
                    }
                    res.Add(VmEntity);
                }
            }
            return VmModel;
        }
    }
}
