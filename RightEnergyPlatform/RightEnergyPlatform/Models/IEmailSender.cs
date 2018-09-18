namespace RightEnergyPlatform.Models
{
    public interface IEmailSender
    {
        void SendEmail(string to, string subject, string body);
    }
}
