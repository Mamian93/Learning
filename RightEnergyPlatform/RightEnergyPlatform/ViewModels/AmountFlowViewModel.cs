using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RightEnergyPlatform.ViewModels
{
    public class AmountFlowViewModel
    {
        public DateTime Time { get; set; }

        public int UKFlowAmount { get; set; }

        public int IRLFlowAmount { get; set; }

        public int NIRLFlowAmount { get; set; }
    }
}
