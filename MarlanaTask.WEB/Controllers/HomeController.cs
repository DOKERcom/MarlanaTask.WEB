using MarlanaTask.WEB.ViewModels;
using MarlanaTask.WEB.WebAppFactories.Implementation;
using MarlanaTask.WEB.WebAppFactories.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace MarlanaTask.WEB.Controllers
{
    public class HomeController : Controller
    {
        IViewModelFactory _mainViewModelFactory;

        public HomeController(IViewModelFactory mainViewModelFactory)
        {
            _mainViewModelFactory = mainViewModelFactory;
        }

        public async Task<IActionResult> Index()
        {
            return View(await _mainViewModelFactory.GetFilledMainViewModel());
        }

    }
}