using RightEnergyPlatform.Data;
using RightEnergyPlatform.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RightEnergyPlatform.Services
{
    public interface IArchiveData
    {
        List<PriceViewModel> GetAllArchivePrice();
        List<AmountFlowViewModel> GetAllAmountFlowData();
    }

    public class ArchiveData : IArchiveData
    {
        private RightDbContext _context;

        public ArchiveData(RightDbContext context)
        {
            _context = context;
        }

        public List<AmountFlowViewModel> GetAllAmountFlowData()
        {

            var DbModel = _context.FlowArchives.Select(c => c).OrderBy(c => c.Time).Take(90)
                                                .Where(c => c.CountryId == 1 || c.CountryId == 2 || c.CountryId == 3);
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
                    else if (item.CountryId == 2)
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
                    else if (item.CountryId == 2)
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


        public List<PriceViewModel> GetAllArchivePrice()
        {

            var DbModel = _context.PriceArchives.Select(c => c).OrderBy(c => c.Time).Take(70)
                                                  .Where(c => c.CountryId == 1 || c.CountryId == 2);
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

