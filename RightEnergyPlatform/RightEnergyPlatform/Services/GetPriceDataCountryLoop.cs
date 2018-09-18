using RightEnergyPlatform.Data.Entities;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Xml.Linq;

namespace RightEnergyPlatform.Services
{
    public interface IGetPriceDataCountryLoop
    {
        List<PriceAmountFlow> CountryGetDataPrice24Records(XElement cleanDoc, DateTimeProvider timeProvider, int CountryID);
        List<PriceAmountFlow> CountryGetDataPrice48Records(XElement cleanDoc, DateTimeProvider timeProvider, int CountryID);
    }

    public class GetPriceDataCountryLoop : IGetPriceDataCountryLoop
    {
        public List<PriceAmountFlow> CountryGetDataPrice48Records(XElement cleanDoc, DateTimeProvider timeProvider, int CountryID)
        {
            List<PriceAmountFlow> Result = new List<PriceAmountFlow>();

            foreach (XElement points in cleanDoc.Descendants("Point"))
            {
                PriceAmountFlow res = new PriceAmountFlow();
                res.Time = timeProvider.GetTime48Records(points.Element("position").Value);
                res.Price = Convert.ToDouble(points.Element("price.amount").Value, CultureInfo.InvariantCulture);
                res.CountryId = CountryID;

                Result.Add(res);
            }

            return Result;
        }

        public List<PriceAmountFlow> CountryGetDataPrice24Records(XElement cleanDoc, DateTimeProvider timeProvider, int CountryID)
        {
            List<PriceAmountFlow> Result = new List<PriceAmountFlow>();

            foreach (XElement points in cleanDoc.Descendants("Point"))
            {
                PriceAmountFlow res = new PriceAmountFlow();
                res.Time = timeProvider.GetTime24Records(points.Element("position").Value);
                res.Price = Convert.ToDouble(points.Element("price.amount").Value, CultureInfo.InvariantCulture);
                res.CountryId = CountryID;

                Result.Add(res);
            }

            return Result;
        }

    }
}
