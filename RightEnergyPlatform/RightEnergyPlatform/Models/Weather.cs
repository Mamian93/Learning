﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RightEnergyPlatform.Models
{
    public class Weather
    {
        public int Rain { get; set; }
        public int SunnyDays { get; set; }
        public int Snow { get; set; }
        public int Hail { get; set; }

        public void CalculateRainDays(string days, DateTime date) { }
        public void CalculateSunnyDays(int days, int hours) { }
        
    }
}
