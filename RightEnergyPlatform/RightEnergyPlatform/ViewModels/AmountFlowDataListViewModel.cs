using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RightEnergyPlatform.ViewModels
{
    public class AmountFlowDataListViewModel
    {
        private List<AmountFlowViewModel> _amountFlowDataListVM = new List<AmountFlowViewModel>();

        public List<AmountFlowViewModel> AmountFlowDataListVM
        {
            get { return _amountFlowDataListVM; }
            set { _amountFlowDataListVM = value; }
        }
    }
}
