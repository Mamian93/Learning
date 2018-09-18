using System.Collections.Generic;

namespace RightEnergyPlatform.ViewModels
{
    public class PriceListViewModel
    {
        private List<PriceViewModel> _priceListVM = new List<PriceViewModel>();

        public List<PriceViewModel> PriceListVM
        {
            get { return _priceListVM; }
            set { _priceListVM = value; }
        }

    }
}
