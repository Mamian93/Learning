using System.ComponentModel.DataAnnotations;

namespace RightEnergyPlatform.ViewModels
{
    public class EditViewModel
    {
        
        [Display(Name = "User Name")]
        [MaxLength(80)]
        public string UserName { get; set; }

        [Display(Name = "First Name")]
        [MaxLength(75)]
        public string FirstName { get; set; }

        [Display(Name = "Last Name")]
        [MaxLength(75)]
        public string LastName { get; set; }

        [Display(Name = "Country")]
        [MaxLength(75)]
        public string Country { get; set; }

        public string StatusMessage { get; set; }
    }
}
