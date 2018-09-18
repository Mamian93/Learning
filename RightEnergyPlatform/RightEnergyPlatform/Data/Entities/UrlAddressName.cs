using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RightEnergyPlatform.Data.Entities
{
    public class UrlAddressName
    {
        public int Id { get; set; }

        public int CountryId { get; set; }

        public string CountryName { get; set; }

        public string Url { get; set; }
    }
}
