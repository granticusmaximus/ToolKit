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
    public class EmployeeService
    {

    }
}
