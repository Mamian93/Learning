using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RightEnergyPlatform.Data;
using RightEnergyPlatform.Data.Entities;
using RightEnergyPlatform.Services;
using RightEnergyPlatform.ViewModels;

namespace RightEnergyPlatform.Controllers
{
    [Route("[Controller]/[action]")]
    [Authorize(Roles = Constants.AdministratorRole)]
    public class ManageUsersController : Controller
    {
        private RightDbContext _context;
        private IManageUser _manageUser;
        private IMapper _mapper;

        public ManageUsersController(RightDbContext context,
                                    IManageUser manageUser,
                                    IMapper mapper)
        {
            _context = context;
            _manageUser = manageUser;
            _mapper = mapper;
        }
           
        public IActionResult Index()
        {
            var model = _manageUser.GetAllUsers();
            if (ModelState.IsValid)
            {
                var plh = new ManageUsersViewModel();
                plh.Users = model;
                return View(plh);
            }

            return NotFound();
        }
        
        public IActionResult Edit(string id)
        {
            try
            {
                var model = _manageUser.GetUser(id);
                if (ModelState.IsValid)
                {
                    return View(model);
                }
                else return NotFound();
            }
            catch (Exception)
            {
                return BadRequest("Failed to get users");
            }
        }
        
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_mapper.Map<IEnumerable<StoreUser>, IEnumerable<ManageUsersViewModel>>(_manageUser.GetAllUsers()));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("admin")]
        public async Task<IActionResult> GetAdmin()
        {
            try
            {
                var data = await _manageUser.GetAdmin();
                
                
                return Ok(_mapper.Map<IEnumerable<StoreUser>, IEnumerable<ManageUsersViewModel>>(data));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]ManageUsersViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newUser = _mapper.Map<ManageUsersViewModel, StoreUser>(model);

                    _manageUser.AddEntity(newUser);
                    _manageUser.SaveChanges();
                    

                    return Created($"/api/manageusers/{newUser.Id}", _mapper.Map<StoreUser, ManageUsersViewModel>(newUser));
                }
                else
                {
                    return BadRequest(ModelState);
                }

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            return BadRequest("Failed to save new user");
        }
            
        //Update
        [HttpPut]
        public IActionResult Put([FromBody]ManageUsersViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var updateUser = _mapper.Map<ManageUsersViewModel, StoreUser>(model);

                    _manageUser.UpdateEntity(updateUser);
                    _manageUser.SaveChanges();


                    return Created($"/api/manageusers/{updateUser.Id}", _mapper.Map<StoreUser, ManageUsersViewModel>(updateUser));

                }
                else
                {
                    return BadRequest("Blok else [put method]");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Blok catch {ex.Message}");
            }

            return BadRequest("Failed to update user");
        }
        
       public IActionResult Delete(string id)
        {
            try
            {
                if (id != null)
                {
                    var res = _context.Users.Where(c => c.Id == id).FirstOrDefault();
                    _manageUser.DeleteEntity(id);
                    _manageUser.SaveChanges();
                   return Ok($"Success, Delete {res.Email} entity");
                }
                else return NotFound();

            }
            catch (Exception ex)
            {
                return BadRequest($"Catch block, message: {ex.Message}");
            }
        }
        
    }
}