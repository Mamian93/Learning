using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RightEnergyPlatform.Data.Entities;
using RightEnergyPlatform.Services;
using RightEnergyPlatform.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RightEnergyPlatform.Controllers
{
    [Route("api/[Controller]/[Action]")]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]   
    [Authorize]
    public class FlowController : Controller
    {
        private readonly IUrlBuilder _urlBuilder;
        private readonly ICurrentEnergyPrice _energyPriceForecast;
        private readonly IEnergyFlowAmountAndTime _energyFlowAmountAndTime;
        private readonly IArchiveData _archiveData;
        private readonly ILongPriceForecast _longPriceForecast;

        public FlowController(IUrlBuilder urlBuilder,
                                ICurrentEnergyPrice energyPriceForecast,
                                IEnergyFlowAmountAndTime energyFlowAmountAndTime,
                                IArchiveData archiveData,
                                ILongPriceForecast longPriceForecast)
        {
            _urlBuilder = urlBuilder;
            _energyPriceForecast = energyPriceForecast;
            _energyFlowAmountAndTime = energyFlowAmountAndTime;
            _archiveData = archiveData;
            _longPriceForecast = longPriceForecast;
        }

        //Tutaj jest nasza aplikacja Angular
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public async Task<IActionResult> GetFlowAmountView()
        {
            try
            {
                await _energyFlowAmountAndTime.ExecuteCallAsync();
                var AmountFlowViewModel = _energyFlowAmountAndTime.GetAllAmountFlowData();
                return Ok(AmountFlowViewModel);

            }
            catch (Exception ex)
            {
                return BadRequest($"Fail to get flows/ FlowController.\nmessage: {ex.Message}");
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetPriceView()
        {
            try
            {
                await _energyPriceForecast.ExecuteCallAsync();
                var PriceViewModel = _energyPriceForecast.GetAllPrice();
                return Ok(PriceViewModel);
            }
            catch (Exception ex)
            {
                return BadRequest($"Fail to get prices/ FlowController.\nmessage: {ex.Message}");
            }
        }

        [HttpGet]
        public IActionResult GetArchivePriceView()
        {
            try
            {
                var PriceViewModel = _archiveData.GetAllArchivePrice();
                return Ok(PriceViewModel);
            }
            catch (Exception ex)
            {
                return BadRequest($"Fail to get archive prices/ FlowController.\nmessage: {ex.Message}");
            }
        }

        [HttpGet]
        public IActionResult GetArchiveLoadView()
        {
            try
            {
                var AmountFlowViewModel = _archiveData.GetAllAmountFlowData();
                return Ok(AmountFlowViewModel);
            }
            catch (Exception ex)
            {
                return BadRequest($"Fail to get archive flows/ FlowController.\nmessage: {ex.Message}");
            }
        }

        [HttpGet]
        public IActionResult GetLongPriceForecastLoadView()
        {
            try
            {
                var PriceViewModel = _longPriceForecast.GetAllLongForecastPrice();
                return Ok(PriceViewModel);
            }
            catch (Exception ex)
            {
                return BadRequest($"Fail to get long price forecast / FlowController.\nmessage: {ex.Message}");
            }
        }
    }
}
