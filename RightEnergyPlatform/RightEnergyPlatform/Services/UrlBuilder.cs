using RightEnergyPlatform.Data;
using System;
using System.Collections.Generic;
using System.Linq;

namespace RightEnergyPlatform.Services
{
    public interface IUrlBuilder
    {
        Dictionary<int, string> GetUrlAmountAndTimeFlow();
        Dictionary<int, string> GetUrlPrice();
    }

    public class UrlBuilder : IUrlBuilder
    {
        private readonly RightDbContext _context;

        public UrlBuilder(RightDbContext context)
        {
            _context = context;
        }

        public Dictionary<int, string> GetUrlAmountAndTimeFlow()
        {
            var model = _context.UrlAddressNames.ToDictionary(c => c.CountryId, c => c.Url);

            DateTime beginDate = DateTime.UtcNow;
            DateTime endDate = DateTime.UtcNow;

            string date = $"periodStart={beginDate.ToString("yyyyMMdd2100")}&periodEnd={endDate.ToString("yyyyMMdd2100")}";

            //Create clean list to whole new url address
            Dictionary<int, string> finalModel = _context.UrlAddressNames.ToDictionary(c => c.CountryId, c => c.Url);
            finalModel.Clear();

            foreach (var urlAddress in model)
            {
                //create whole url address
                var result = urlAddress.Value + date;

                finalModel.Add(urlAddress.Key, result);
            }

            return finalModel;
        }

        public Dictionary<int, string> GetUrlPrice()
        {
            var model = _context.CountryIdLists.ToDictionary(c => c.CountryId, c => c.UrlAddress);

            DateTime beginDate = DateTime.UtcNow;
            DateTime endDate = DateTime.UtcNow;

            string date = $"periodStart={beginDate.ToString("yyyyMMdd2100")}&periodEnd={endDate.ToString("yyyyMMdd2100")}";

            //Create clean list to whole new url address
            Dictionary<int, string> finalModel = _context.CountryIdLists.ToDictionary(c => c.CountryId, c => c.UrlAddress);
            finalModel.Clear();

            foreach (var urlAddress in model)
            {
                //create whole url address
                var result = urlAddress.Value + date;

                finalModel.Add(urlAddress.Key, result);
            }

            return finalModel;
        }

    }
}
