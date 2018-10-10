using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class Project
    {
        [Key]
        public int PID { get; set; }
        public string ProjectTitle { get; set; }
        public int ClientID { get; set; }
        public int EmpID { get; set; }
        public string EmpFname { get; set; }
        public string EmpLname { get; set; }
        public DateTime DueDate { get; set; }
        public DateTime Created_at { get; set; }
        public DateTime Updated_at { get; set; }
        public bool Completed { get; set; }
        public string ProjectNotes { get; set; }

        public List<Project> Projects { get; set; }
    }
}
