using System;
using System.Collections.Generic;

namespace RightEnergyPlatform.Data.Entities
{
    public class PriceAmountFlow
    {
        public int Id { get; set; }

        public DateTime Time { get; set; }

        public int CountryId { get; set; }

        public double Price { get; set; }

        public static implicit operator List<object>(PriceAmountFlow v)
        {
            throw new NotImplementedException();
        }
    }
}
