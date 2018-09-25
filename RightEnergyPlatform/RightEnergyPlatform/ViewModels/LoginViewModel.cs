using System.ComponentModel.DataAnnotations;

namespace RightEnergyPlatform.ViewModels
{
    public class LoginViewModel
    {

        [Required]
        [MaxLength(250)]
        [Display(Name = "User Name")]
        public string UserName { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Display(Name = "Remember me?")]
        public bool RememberMe { get; set; }
    }
}
