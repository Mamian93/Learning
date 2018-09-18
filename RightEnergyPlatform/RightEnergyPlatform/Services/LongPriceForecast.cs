using RightEnergyPlatform.Data;
using RightEnergyPlatform.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RightEnergyPlatform.Services
{
    public interface ILongPriceForecast
    {
        List<PriceViewModel> GetAllLongForecastPrice();
    }

    public class LongPriceForecast : ILongPriceForecast
    {
        private RightDbContext _context;

        public LongPriceForecast(RightDbContext context)
        {
            _context = context;
        }

        public List<PriceViewModel> GetAllLongForecastPrice()
        {
            var DbModel = _context.PriceForecasts.Select(c => c).OrderBy(c => c.Time);
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
