using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using RightEnergyPlatform.Data.Entities;

namespace RightEnergyPlatform.Data
{
    public class RightDbContext : IdentityDbContext<StoreUser>
    {
        public RightDbContext()
        {

        }

        public RightDbContext(DbContextOptions<RightDbContext> options) : base(options)
        {

        }
                
        public DbSet<UrlAddressName> UrlAddressNames { get; set; }
        public DbSet<AmountAndTimeOfEnergyFlow> AmountAndTimeOfEnergyFlows { get; set; }

        public DbSet<PriceAmountFlow> PriceAmountFlows { get; set; }
        public DbSet<CountryIdList> CountryIdLists { get; set; }

        public DbSet<PriceArchive> PriceArchives { get; set; }
        public DbSet<FlowArchive> FlowArchives { get; set; }
        public DbSet<PriceForecast> PriceForecasts { get; set; }
    }
}
