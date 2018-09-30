using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RightEnergyPlatform.Models
{
    public class Weather
    {
        public int Rain { get; set; }
        public int SunnyDays { get; set; }

        public void CalculateRainDays(int days) { }
    }
}
