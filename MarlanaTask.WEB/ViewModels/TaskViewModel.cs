using System.ComponentModel.DataAnnotations;

namespace MarlanaTask.API.Models
{
    public class TaskViewModel
    {

        [Required]
        [MaxLength(25)]
        public string name { get; set; }

        [Required]
        public bool status { get; set; }
    }
}
