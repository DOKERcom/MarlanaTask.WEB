using MarlanaTask.API.Models;
using MarlanaTask.WEB.ViewModels;

namespace MarlanaTask.WEB.WebAppFactories.Interfaces
{
    public interface IViewModelFactory
    {
        public Task<MainViewModel> GetFilledMainViewModel();

        public Task<TasksBlockViewModel> GetTasksBlockiewModelByName(string name);
    }
}
