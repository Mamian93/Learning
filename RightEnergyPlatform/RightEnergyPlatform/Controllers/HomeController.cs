using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.NodeServices;
using RightEnergyPlatform.Models;
using RightEnergyPlatform.Services;
using RightEnergyPlatform.ViewModels;
using System.Diagnostics;
using System.Threading.Tasks;

namespace RightEnergyPlatform.Controllers
{
    public class HomeController : Controller
    {
        private IEmailSender _mailService;

        public HomeController(IEmailSender mailService)
        {
            _mailService = mailService;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult About()
        {
            return View();
        }

        [HttpPost]
        public IActionResult About(AboutViewModel model)
        {
            if (ModelState.IsValid)
            {
                // Send the email
                _mailService.SendEmail("mamian@autograf.pl", model.Subject, $"From: {model.Name} - {model.Email}, Message: {model.Message}");
                ViewBag.UserMessage = "Mail Sent";
                ModelState.Clear();
            }

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
