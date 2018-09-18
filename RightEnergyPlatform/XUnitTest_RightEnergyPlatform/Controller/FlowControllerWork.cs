using AutoMapper;
using RightEnergyPlatform.Controllers;
using RightEnergyPlatform.Services;
using Xunit;

namespace XUnitTest_RightEnergyPlatform.Controller
{
    public class FlowControllerWork
    {
        private IUrlBuilder _urlBuilder;
        private ICurrentEnergyPrice _energyFlowPrice;
        private IMapper _mapper;

        public FlowControllerWork(IUrlBuilder urlBuilder,
                                ICurrentEnergyPrice energyFlowPrice,
                                IMapper mapper)
        {
            _urlBuilder = urlBuilder;
            _energyFlowPrice = energyFlowPrice;
            _mapper = mapper;
        }

        //[Fact]
        //public void Update()
        //{
        //    FlowController flowController = new FlowController(_flowData, _urlBuilder, _savaDataToDB, _energyFlowPrice, _mapper);

        //}
    }
}
