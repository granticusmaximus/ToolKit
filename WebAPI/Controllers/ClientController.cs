using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI.Controllers
{
    [ApiController]
    public class ClientController : Controller
    {
        // GET: /<controller>/
        [HttpGet("{id}")]
        public ActionResult<string> GetClientID(int cid)
        {
            return View();
        }

        public ActionResult<string> AddNewClient(int cid, )
    }
}
