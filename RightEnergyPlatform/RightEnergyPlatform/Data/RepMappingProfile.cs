using AutoMapper;
using RightEnergyPlatform.Data.Entities;
using RightEnergyPlatform.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RightEnergyPlatform.Data
{
    public class RepMappingProfile : Profile
    {
        public RepMappingProfile()
        {

            CreateMap<StoreUser, ManageUsersViewModel>()
                .ReverseMap();
            //CreateMap<AmountAndTimeOfEnergyFlow, AmountFlowViewModel>()
            //    .ForMember(o => o.UKFlowAmount, ex => ex.MapFrom(o => o.FlowAmount && o.CountryId == 1))
            //    .ForMember(o => o.IRLFlowAmount, ex => ex.MapFrom(o => o.CountryId == 2))
            //    .ForMember(o => o.NIRLFlowAmount, ex => ex.MapFrom(o => o.CountryId == 3))
            //    .ReverseMap();
        }
    }
}
