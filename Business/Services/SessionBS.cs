using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Security.Claims;
using Business.Models;
using Business.Models.DTO;
using log4net;

namespace Business.Services
{
    public class SessionBS
    {
        // Replace XXXX with your app name
        private ToolKitDbContext db = new ToolKitDbContext();
        protected ILog _logger;
        public SessionBS()
        {
            _logger = LogManager.GetLogger("AppLogger");
        }

        public SignInDTO GetSigninModel(SimpleNameVM vm)
        {
            Contract.Ensures(Contract.Result<SignInDTO>() != null);
            var user = db.Users.SingleOrDefault(x => x.Email == vm.Email);

            List<ToolKitForms> ToolKitForms = new List<ToolKitForms>();

            if (user == null)
            {
                // create and save user
                user = new User();
                user.FirstName = vm.FirstName;
                user.LastName = vm.LastName;
                user.Email = vm.Email;
                user.isActive = true;
                _logger.Info("New User has logged into site: " + vm.FirstName + " " + vm.LastName);
                db.Users.Add(user);
                db.SaveChanges();
            }
            //else
            //{
            //    //Get All Forms that this User needs to signs to display on list to select and sign
            //    var userForms = db.XXXXForms.Include(f => f.XXXXFields).Where(z => z.submittedBy == user.email).ToList();
            //}

            //Data being transferred from succesful API call VM
            var signInDto = new SignInDTO();
            signInDto.Xsrf = Guid.NewGuid().ToString();
            var claimsList = new List<Claim>();
            signInDto.Identity = new ClaimsIdentity(claimsList, "ApplicationCookie", ClaimTypes.NameIdentifier, ClaimTypes.Role);
            signInDto.User = user;

            //All Forms and All their values
            signInDto.ToolKitForms = db.ToolKitForms
             .Where(c => c.type == "781")
            //.Include(m => m.XXXXFields.Where(v => v.key == "lastName"))
            .ToList();

            return signInDto;
        }

        private class ToolKitDbContext
        {
            public object Users { get; internal set; }

            internal void SaveChanges()
            {
                throw new NotImplementedException();
            }
        }
    }
}
