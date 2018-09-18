using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using RightEnergyPlatform.Data;
using RightEnergyPlatform.Data.Entities;
using RightEnergyPlatform.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RightEnergyPlatform.Services
{
    public interface IManageUser
    {
        IEnumerable<StoreUser> GetAllUsers();
        StoreUser GetUser(string id);
        Task<IEnumerable<StoreUser>> GetAdmin();
        void AddEntity(StoreUser model);
        void UpdateEntity(StoreUser model);
        void DeleteEntity(string id);
        void SaveChanges();
    }

    public class ManageUser : IManageUser
    {
        private RightDbContext _dbContext;
        private UserManager<StoreUser> _userManager;

        public ManageUser(RightDbContext dbcontext,
                            UserManager<StoreUser> userManager)
        {
            _dbContext = dbcontext;
            _userManager = userManager;
        }

        public void AddEntity(StoreUser model)
        {
            _dbContext.Users.Add(model);
        }

        public void UpdateEntity(StoreUser model)
        {
           var plhol = _dbContext.Users.Where(c => c.Id == model.Id).Single<StoreUser>();
            plhol.Id = model.Id;
            plhol.Email = model.Email;
            plhol.UserName = model.UserName;
            _dbContext.SaveChanges();
        }

        public async Task<IEnumerable<StoreUser>> GetAdmin()
        {
            var admins = await _userManager.GetUsersInRoleAsync("Administrator");

            return admins;
        }

        public StoreUser GetUser(string id)
        {
            return _dbContext.Users.Select(c => c)
                                .Where(c => c.Id == id)
                                .FirstOrDefault();
        }

        public IEnumerable<StoreUser> GetAllUsers()
        {
            return _dbContext.Users
                    .OrderBy(c => c.Email)
                    .ToList();
        }   

        public void SaveChanges()
        {
            _dbContext.SaveChanges();
        }

        public void DeleteEntity(string id)
        {
            var res = _dbContext.Users.Where(c => c.Id == id).Single<StoreUser>();
            _dbContext.Users.Remove(res);
                        
        }
    }
}
