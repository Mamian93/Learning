using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using RightEnergyPlatform.Data;
using RightEnergyPlatform.Data.Entities;
using RightEnergyPlatform.Models;
using RightEnergyPlatform.Services;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RightEnergyPlatform
{
    public class Startup
    {
        private readonly IConfiguration _config;

        public Startup(IConfiguration config)
        {
            _config = config;

            var builder = new ConfigurationBuilder();
            builder.AddUserSecrets<Startup>();
            Configuration = builder.Build();
            foreach (var item in _config.AsEnumerable())
            {
                Configuration[item.Key] = item.Value;
            }
        }

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder();
            if (env.IsDevelopment())
            {
                builder.AddUserSecrets<Startup>();
            }
            Configuration = builder.Build();
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddIdentity<StoreUser, IdentityRole>(cfg =>
            {
                cfg.User.RequireUniqueEmail = true;
            })
               .AddEntityFrameworkStores<RightDbContext>();

            services.AddAuthentication()
                .AddCookie()
                //.AddJwtBearer()
                .AddJwtBearer(cfg =>
                {
                    cfg.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidIssuer = _config["Tokens:Issuer"],
                        ValidAudience = _config["Tokens:Audience"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Tokens:Key"]))
                    };
                })
                 .AddFacebook(options =>
                 {
                     options.AppId = Configuration["Facebook:AppId"];
                     options.AppSecret = Configuration["Facebook:AppSecret"];
                 });

            services.AddDbContext<RightDbContext>(cfg =>
            {
                cfg.UseSqlServer(Configuration["RightConnectionString"]);
            });

            services.AddAutoMapper();


            services.AddTransient<IEmailSender, NullMailSerice>();
            services.AddScoped<IUrlBuilder, UrlBuilder>();
            services.AddScoped<IGetDataCountryFlowLoop, GetDataCountryFlowLoop>();
            services.AddScoped<IGetPriceDataCountryLoop, GetPriceDataCountryLoop>();
            services.AddScoped<ICurrentEnergyPrice, CurrentEnergyPrice>();
            services.AddScoped<IEnergyFlowAmountAndTime, EnergyFlowAmountAndTime>();
            services.AddScoped<IManageUser, ManageUser>();
            services.AddScoped<IArchiveData, ArchiveData>();
            services.AddScoped<ILongPriceForecast, LongPriceForecast>();
            services.AddNodeServices(x => x.LaunchWithDebugging = true);


            services.AddMvc(options =>
            {
                options.Filters.Add(new RequireHttpsAttribute());
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app,
                                IHostingEnvironment env,
                                 UserManager<StoreUser> userManager,
                                  RoleManager<IdentityRole> roleManager)
        {
            if (env.IsDevelopment())
            {
                //show errors from 400 to 599 wich haven't got any body
                app.UseStatusCodePages();
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
                app.UseDatabaseErrorPage();

                EnsureRolesAsync(roleManager).Wait();
                EnsureTestAdminAsync(userManager).Wait();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }
            app.UseRewriter(new RewriteOptions().AddRedirectToHttps(301, 44342));

            app.UseStaticFiles();

            app.UseAuthentication();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }

        private static async Task EnsureRolesAsync(RoleManager<IdentityRole> roleManager)
        {
            var alreadyExists = await roleManager.RoleExistsAsync(Constants.AdministratorRole);

            if (alreadyExists) return;

            await roleManager.CreateAsync(new IdentityRole(Constants.AdministratorRole));
        }

        private static async Task EnsureTestAdminAsync(UserManager<StoreUser> userManager)
        {
            var testAdmin = await userManager.Users
                                    .Where(x => x.UserName == "admin@todo.local")
                                    .SingleOrDefaultAsync();

            if (testAdmin != null) return;

            testAdmin = new StoreUser { UserName = "admin@todo.local", Email = "admin@todo.local" };
            await userManager.CreateAsync(testAdmin, "NotSecure123!!");
            await userManager.AddToRoleAsync(testAdmin, Constants.AdministratorRole);
        }
    }
}
