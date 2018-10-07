using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class Employee
    {
        public Employee()
        {
            this.EmpEmail = string.Empty;
            this.EmpFirstName = string.Empty;
            this.EmpLastName = string.Empty;
        }
        public int EID { get; set; }
        public string EmpEmail { get; set; }
        public string EmpFirstName { get; set; }
        public string EmpLastName { get; set; }
        public string EmpPhone { get; set; }
        public string Password { get; set; }
        public bool isActive { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

        public List<Employee> Employees { get; set; }
    }
}
