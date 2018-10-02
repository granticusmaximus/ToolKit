using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class Invoice
    {
        [Key]
        public int IID { get; set; }
        public int ClientID { get; set; }
        public DateTime DueDate { get; set; }
        public DateTime Created_at { get; set; }
        public DateTime Updated_at { get; set; }
        public string InvoiceItems { get; set; }
        public bool Completed { get; set; }
        public string InvoiceNotes { get; set; }

        public List<Invoice> Invoices { get; set; }
    }
}
