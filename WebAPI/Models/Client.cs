using System;
using System.Collections.Generic;

namespace WebAPI.Models
{
    public class Client
    {
        public int ClientID { get; set; }
        public string POCname { get; set; }
        public string POCemail { get; set; }
        public string POCphone { get; set; }
        public string BusinessName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
        public string Notes { get; set; }

        public List<Client> Clients { get; set; }
    }
}
