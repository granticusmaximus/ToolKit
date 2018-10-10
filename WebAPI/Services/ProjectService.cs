using System;
using System.Collections.Generic;
using System.Linq;
using WebAPI.DataAccess;
using WebAPI.Exceptions;
using WebAPI.Models;

namespace WebAPI.Services
{
    public interface IProjectService
    {
        IEnumerable<Project> GetAll();
        Project GetById(Project PID);
        Project Create(Project PID);
        void Update(Project PID);
        void Delete(Project PID);
    }

    public class ProjectService : IProjectService
    {
        private ToolkitDbContext _context;

        public ProjectService(ToolkitDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Project> GetAll()
        {
            return _context.Projects;
        }

        public Project GetById(Project PID)
        {
            return _context.Projects.Find(PID);
        }

        public Project Create(Project project)
        {
            // validation
            if (_context.Projects.Any(x => x.PID == project.PID))
                throw new AppException("Project ID " + project.PID + " is already in use");

            if (_context.Projects.Any(x => x.ProjectTitle == project.ProjectTitle))
                throw new AppException("Project Title " + project.ProjectTitle + " is already in use");

            if (_context.Projects.Any(x => x.ProjectNotes == project.ProjectNotes))
                throw new AppException("Project Notes " + project.ProjectNotes + " is already in use");

            if (_context.Projects.Any(x => x.DueDate == project.DueDate))
                throw new AppException("Due Date " + project.DueDate + " has not changed");

            if (_context.Projects.Any(x => x.ClientID == project.ClientID))
                throw new AppException("Client ID " + project.ClientID + " has not changed");

            if (_context.Projects.Any(x => x.EmpID == project.EmpID))
                throw new AppException("Employee ID " + project.EmpID + " has not changed");

            _context.Projects.Add(project);
            _context.SaveChanges();

            return project;
        }

        public void Update(Project projectParam)
        {
            var project = _context.Projects.Find(projectParam.PID);

            if (project == null)
                throw new AppException("Project not found");

            if (projectParam.PID != project.PID)
            {
                // id has changed, check to see if it has been taken already
                if (_context.Projects.Any(x => x.PID == project.PID))
                    throw new AppException("Project ID " + project.PID + " is already in use");
            }

            if (projectParam.ProjectTitle != project.ProjectTitle)
            {
                // title has changed, check to see if it has been taken already
                if (_context.Projects.Any(x => x.ProjectTitle == project.ProjectTitle))
                    throw new AppException("Project Title " + project.ProjectTitle + " is already in use");
            }

            if (projectParam.ProjectNotes != project.ProjectNotes)
            {
                // title has changed, check to see if it has been taken already
                if (_context.Projects.Any(x => x.ProjectNotes == project.ProjectNotes))
                    throw new AppException("Project Notes " + project.ProjectNotes + " is already in use");
            }

            if (projectParam.DueDate != project.DueDate)
            {
                // title has changed, check to see if it has been taken already
                if (_context.Projects.Any(x => x.DueDate == project.DueDate))
                    throw new AppException("Due Date " + project.DueDate + " has not changed");
            }

            if (projectParam.Created_at != project.Created_at)
            {
                // title has changed, check to see if it has been taken already
                if (_context.Projects.Any(x => x.Created_at == project.Created_at))
                    throw new AppException("Created At Date: " + project.Created_at + " has not changed");
            }

            if (projectParam.Updated_at != project.Updated_at)
            {
                // title has changed, check to see if it has been taken already
                if (_context.Projects.Any(x => x.Updated_at == project.Updated_at))
                    throw new AppException("Updated At Date: " + project.Updated_at + " has not changed");
            }

            if (projectParam.ClientID != project.ClientID)
            {
                // title has changed, check to see if it has been taken already
                if (_context.Projects.Any(x => x.ClientID == project.ClientID))
                    throw new AppException("Client ID: " + project.Updated_at + " has not changed");
            }

            if (projectParam.EmpID != project.EmpID)
            {
                // title has changed, check to see if it has been taken already
                if (_context.Projects.Any(x => x.EmpID == project.EmpID))
                    throw new AppException("Employee ID: " + project.EmpID + " has not changed");
            }

            // update client properties
            project.PID = projectParam.PID;
            project.ClientID = projectParam.ClientID;

            _context.Projects.Update(project);
            _context.SaveChanges();

        }

        public void Delete(Project PID)
        {
            var post = _context.Posts.Find(PID);
            if (post != null)
            {
                _context.Posts.Remove(post);
                _context.SaveChanges();
            }
        }
    }
}
