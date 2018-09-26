
using System;
using System.Collections.Generic;
using System.Security.Claims;

namespace WebAPI.Models.DTO
{
    public class SignInDTO
    {
        public ClaimsIdentity Identity { get; set; }
        public User User { get; set; }

        public string Xsrf { get; set; }

        public List<User> Users { get; set; }
    }
}
