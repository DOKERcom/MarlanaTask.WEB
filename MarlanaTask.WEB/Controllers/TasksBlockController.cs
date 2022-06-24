using MarlanaTask.WEB.WebAppFactories.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace MarlanaTask.WEB.Controllers
{
    public class TasksBlockController : Controller
    {
        IViewModelFactory _mainViewModelFactory;

        public TasksBlockController(IViewModelFactory mainViewModelFactory)
        {
            _mainViewModelFactory = mainViewModelFactory;
        }

        [HttpGet]
        public async Task<IActionResult> Index(string name)
        {
            return View(await _mainViewModelFactory.GetTasksBlockiewModelByName(name));
        }
    }
}
