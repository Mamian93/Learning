using Microsoft.Extensions.Logging;

namespace RightEnergyPlatform.Models
{
    public class NullMailSerice : IEmailSender
    {
        private ILogger<NullMailSerice> _logger;

        public NullMailSerice(ILogger<NullMailSerice> logger)
        {
            _logger = logger;
        }

        public void SendEmail(string to, string subject, string body)
        {
            // Log the message
            _logger.LogInformation($"To: {to} Subject: {subject} Body: {body}");

        }
    }
}
