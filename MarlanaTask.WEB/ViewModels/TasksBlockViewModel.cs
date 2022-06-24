using System.ComponentModel.DataAnnotations;

namespace MarlanaTask.API.Models
{
    public class TasksBlockViewModel
    {
        [Required]
        [MaxLength(25)]
        public string name { get; set; }

        public virtual List<TaskViewModel> tasks { get; set; }
        public TasksBlockViewModel()
        {
            tasks = new List<TaskViewModel>();
        }
    }
}
