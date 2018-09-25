using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.AspNetCore.Mvc;
using RouteAttribute = System.Web.Http.RouteAttribute;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI.Controllers
{
    public class UserController : Controller
    {
        [Authorize]
        [Route("/[controller]/{uid}")]
        public IActionResult Login()
        {
            return Dashboard();
        }

        [Authorize]
        [Route("/[controller]/register")]
        public IActionResult Register()
        {
            return View();
        }

        [Authorize]
        [Route("/[controller]/dashboard/{uid}")]
        public IActionResult Dashboard()
        {
            return View();
        }
    }
}
