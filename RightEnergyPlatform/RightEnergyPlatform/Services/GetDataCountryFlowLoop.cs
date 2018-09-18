using RightEnergyPlatform.Data.Entities;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Xml.Linq;

namespace RightEnergyPlatform.Services
{
    public interface IGetDataCountryFlowLoop
    {
        List<AmountAndTimeOfEnergyFlow> GetCountryData(XElement cleanDoc, DateTimeProvider timeProvider, int CountryID);
    }

    public class GetDataCountryFlowLoop : IGetDataCountryFlowLoop
    {
        public List<AmountAndTimeOfEnergyFlow> GetCountryData(XElement cleanDoc, DateTimeProvider timeProvider, int CountryID)
        {
            List<AmountAndTimeOfEnergyFlow> Result = new List<AmountAndTimeOfEnergyFlow>();

            foreach (XElement points in cleanDoc.Descendants("Point"))
            {
                AmountAndTimeOfEnergyFlow res = new AmountAndTimeOfEnergyFlow();
                res.Time = timeProvider.GetTime48Records(points.Element("position").Value);
                res.FlowAmount = Convert.ToInt32(points.Element("quantity").Value, CultureInfo.InvariantCulture);
                res.CountryId = CountryID;

                Result.Add(res);
            }

            return Result;
        }
    }
}
