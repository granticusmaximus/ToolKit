using System;
using System.Collections.Generic;
using System.Linq;
using WebAPI.DataAccess;
using WebAPI.Exceptions;
using WebAPI.Models;

namespace WebAPI.Services
{
    public interface IInvoiceService
    {
        IEnumerable<Invoice> GetAll();
        Invoice GetById(Invoice IID);
        Invoice Create(Invoice IID);
        void Update(Invoice IID);
        void Delete(Invoice IID);
    }

    public class InvoiceService : IInvoiceService
    {
        private ToolkitDbContext _context;

        public InvoiceService(ToolkitDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Invoice> GetAll()
        {
            return _context.Invoices;
        }

        public Invoice GetById(Invoice IID)
        {
            return _context.Invoices.Find(IID);
        }

        public Invoice Create(Invoice invoice)
        {
            // validation
            if (_context.Invoices.Any(x => x.IID == invoice.IID))
                throw new AppException("Invoice ID " + invoice.IID + " is already in use");

            // Name of Invoice Owner based on Due Date
            if (_context.Invoices.Any(x => x.Invoice_Too + x.DueDate + x.DueDate == invoice.Invoice_Too + invoice.DueDate + invoice.ClientID))
                throw new AppException("Bill " + invoice.Invoice_Too + invoice.DueDate + invoice.ClientID + " has already been made");

            //InvoiceItems
            if (_context.Invoices.Any(x => x.InvoiceItems + x.ClientID + x.IID == invoice.InvoiceItems + invoice.ClientID + invoice.IID))
                throw new AppException("Invoice Item " + invoice.InvoiceItems + invoice.ClientID + invoice.IID + " is already in use");

            //InvoiceNotes
            if (_context.Invoices.Any(x => x.InvoiceNotes + x.ClientID + x.IID == invoice.InvoiceNotes + invoice.ClientID + invoice.IID))
                throw new AppException("Invoice Notes " + invoice.InvoiceNotes + invoice.ClientID + invoice.IID + " for " + invoice.ClientID + invoice.IID + " is already in use");


            _context.Invoices.Add(invoice);
            _context.SaveChanges();

            return invoice;
        }

        public void Update(Invoice invoiceParam)
        {
            var invoice = _context.Invoices.Find(invoiceParam.IID);

            if (invoice == null)
                throw new AppException("Post not found");

            if (invoiceParam.IID != invoice.IID)
            {
                // id has changed, check to see if it has been taken already
                if (_context.Invoices.Any(x => x.IID == invoice.IID))
                    throw new AppException("Invoice ID " + invoice.IID + " is already in use");
            }

            if (invoiceParam.Invoice_Too != invoice.Invoice_Too)
            {
                // Owner has changed, check to see if it has been taken already
                if (_context.Invoices.Any(x => x.Invoice_Too + x.DueDate + x.DueDate == invoice.Invoice_Too + invoice.DueDate + invoice.ClientID))
                    throw new AppException("Bill " + invoice.Invoice_Too + invoice.DueDate + invoice.ClientID + " has already been made");
            }

            if (invoiceParam.InvoiceItems != invoice.InvoiceItems)
            {
                // title has changed, check to see if it has been taken already
                if (_context.Invoices.Any(x => x.InvoiceItems + x.ClientID + x.IID == invoice.InvoiceItems + invoice.ClientID + invoice.IID))
                    throw new AppException("Invoice Item " + invoice.InvoiceItems + invoice.ClientID + invoice.IID + " is already in use");
            }

            if (invoiceParam.InvoiceItems != invoice.InvoiceItems)
            {
                // title has changed, check to see if it has been taken already
                if (_context.Invoices.Any(x => x.InvoiceNotes + x.ClientID + x.IID == invoice.InvoiceNotes + invoice.ClientID + invoice.IID))
                    throw new AppException("Invoice Notes " + invoice.InvoiceNotes + invoice.ClientID + invoice.IID + " for " + invoice.ClientID + invoice.IID + " is already in use");

            }

            // update client properties
            invoice.IID = invoiceParam.IID;
            invoice.ClientID = invoiceParam.ClientID;
            invoice.Completed = invoiceParam.Completed;
            invoice.Created_at = invoiceParam.Created_at;
            invoice.Updated_at = invoiceParam.Updated_at;
            invoice.DueDate = invoiceParam.DueDate;
            invoice.InvoiceItems = invoiceParam.InvoiceItems;
            invoice.Invoice_Too = invoiceParam.Invoice_Too;

            _context.Invoices.Update(invoice);
            _context.SaveChanges();

        }

        public void Delete(Invoice IID)
        {
            var post = _context.Invoices.Find(IID);
            if (post != null)
            {
                _context.Invoices.Remove(IID);
                _context.SaveChanges();
            }
        }
    }
}
