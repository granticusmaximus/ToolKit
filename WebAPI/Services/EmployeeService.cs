using System;
using System.Collections.Generic;
using System.Linq;
using WebAPI.DataAccess;
using WebAPI.Exceptions;
using WebAPI.Models;

namespace WebAPI.Services
{
    public interface IEmployeeService
    {
        IEnumerable<Employee> GetAll();
        Employee GetById(Employee EmpID);
        Employee Create(Employee EmpID);
        void Update(Employee EmpID);
        void Delete(Employee EmpID);
    }

    public class EmployeeService : IEmployeeService
    {
        private ToolkitDbContext _context;

        public EmployeeService(ToolkitDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Employee> GetAll()
        {
            return _context.Employees;
        }

        public Employee GetById(Employee EID)
        {
            return _context.Employees.Find(EID);
        }

        public Employee Create(Employee employee)
        {
            // validation
            if (_context.Employees.Any(x => x.EID == employee.EID))
                throw new AppException("Employee ID " + employee.EID + " is already in use");

            if (_context.Employees.Any(x => x.EmpFirstName + x.EmpLastName == employee.EmpFirstName + employee.EmpLastName))
                throw new AppException("Employee Name " + employee.EmpFirstName + employee.EmpLastName + " is already in use");

            if (_context.Employees.Any(x => x.EmpEmail == employee.EmpEmail))
                throw new AppException("Employee Email " + employee.EmpEmail + " is already in use");

            if (_context.Employees.Any(x => x.EmpPhone == employee.EmpPhone))
                throw new AppException("Employee Phone " + employee.EmpPhone + " is already in use");

            _context.Employees.Add(employee);
            _context.SaveChanges();

            return employee;
        }

        public void Update(Employee empParam)
        {
            var employee = _context.Employees.Find(empParam.EID);

            if (employee == null)
                throw new AppException("Employee not found");

            if (empParam.EmpFirstName + empParam.EmpLastName != employee.EmpFirstName + employee.EmpLastName)
            {
                // First and Last Name has changed so check if the new First and Last Name is already taken
                if (_context.Employees.Any(x => x.EmpFirstName + x.EmpLastName == employee.EmpFirstName + employee.EmpLastName))
                    throw new AppException("Employee Name " + employee.EmpFirstName + employee.EmpLastName + " is already in use");
            }

            if (empParam.EID != employee.EID)
            {
                // id has changed, check to see if it has been taken already
                if (_context.Employees.Any(x => x.EID == employee.EID))
                    throw new AppException("Employee ID " + employee.EID + " is already in use");
            }

            // update client properties
            employee.EID = empParam.EID;
            employee.EmpFirstName = empParam.EmpFirstName;
            employee.EmpLastName = empParam.EmpLastName;
            employee.EmpEmail = empParam.EmpEmail;
            employee.EmpPhone = empParam.EmpPhone;

            _context.Employees.Update(employee);
            _context.SaveChanges();

        }

        public void Delete(Employee EID)
        {
            var employee = _context.Employees.Find(EID);
            if (employee != null)
            {
                _context.Employees.Remove(employee);
                _context.SaveChanges();
            }
        }
    }
}
