using MarlanaTask.API.Models;
using MarlanaTask.WEB.ViewModels;
using MarlanaTask.WEB.WebAppFactories.Interfaces;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using System.Net;
using System.Text.Json;

namespace MarlanaTask.WEB.WebAppFactories.Implementation
{
    public class ViewModelFactory : IViewModelFactory
    {
        WebClient client = new WebClient();
        public async Task<MainViewModel> GetFilledMainViewModel()
        {
            MainViewModel mainViewModel = new MainViewModel();

            var result = client.DownloadString(new Uri("https://localhost:7185/api/TasksBlock"));

            mainViewModel.tasksBlockViewModels = JsonSerializer.Deserialize<List<TasksBlockViewModel>>(result);

            return mainViewModel;
        }

        public async Task<TasksBlockViewModel> GetTasksBlockiewModelByName(string name)
        {
            TasksBlockViewModel tasksBlockViewModel = new TasksBlockViewModel();

            var result = client.DownloadString(new Uri($"https://localhost:7185/api/TasksBlock/One?name={name}"));

            tasksBlockViewModel = JsonSerializer.Deserialize<TasksBlockViewModel>(result);

            return tasksBlockViewModel;
        }
    }
}
