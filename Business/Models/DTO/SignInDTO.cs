using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Business.Models.DTO
{
    public class SignInDTO
    {
        public ClaimsIdentity Identity { get; set; }
        public User User { get; set; }

        public string Xsrf { get; set; }

        public List<User> Users { get; set; }
    }
}
