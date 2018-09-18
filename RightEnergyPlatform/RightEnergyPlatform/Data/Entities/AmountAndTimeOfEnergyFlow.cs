using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RightEnergyPlatform.Data.Entities
{
    public class AmountAndTimeOfEnergyFlow
    {
        public int Id { get; set; }

        public DateTime Time { get; set; }

        public int CountryId { get; set; }

        public int FlowAmount { get; set; }
    }
}
