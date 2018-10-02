using System;
using System.Collections.Generic;
using System.Linq;
using WebAPI.DataAccess;
using WebAPI.Exceptions;

namespace WebAPI.Services
{
    public interface ICalendarService
    {
        IEnumerable<Calendar> GetAll();
        Calendar GetById(Calendar CalendarID);
        Calendar Create(Calendar CalendarID);
        void Update(Calendar CalendarID);
        void Delete(Calendar CalendarID);
    }
    public class CalendarService : ICalendarService
    {
        private ToolkitDbContext _context;

        CalendarService(ToolkitDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Calendar> GetAll()
        {
            return _context.Calendars;
        }

        public Calendar GetById(Calendar CalendarID)
        {
            return _context.Calendars.Find(CalendarID);
        }

        public Calendar Create(Calendar calendar)
        {
            // validation
            if (_context.Calendars.Any(x => x.CalendarTitle == calendar.CalendarTitle))
                throw new AppException("Calendar Title " + calendar.CalendarTitle + " is already in use");

            // validation
            if (_context.Calendars.Any(x => x.CalendarID == calendar.CalendarID))
                throw new AppException("Client Ide " + calendar.CalendarID + " is already in use");

            _context.Calendars.Add(calendar);
            _context.SaveChanges();

            return calendar;
        }

        public void Update(Calendar calendarParam)
        {
            var calendar = _context.Calendars.Find(calendarParam.CalendarID);

            if (calendar == null)
                throw new AppException("Client not found");

            if (calendarParam.CalendarTitle != calendar.CalendarTitle)
            {
                // username has changed so check if the new username is already taken
                if (_context.Calendars.Any(x => x.CalendarTitle == calendarParam.CalendarTitle))
                    throw new AppException("Calendar Title " + calendarParam.CalendarTitle + " is already in use");
            }

            if (calendarParam.CalendarID != calendar.CalendarID)
            {
                // username has changed so check if the new username is already taken
                if (_context.Calendars.Any(x => x.CalendarID == calendarParam.CalendarID))
                    throw new AppException("Calendar ID " + calendarParam.CalendarID + " is already in use");
            }

            // update client properties
            calendar.CalendarID = calendarParam.CalendarID;
            calendar.CalendarTitle = calendarParam.CalendarTitle;
            calendar.CalendarNotes = calendarParam.CalendarNotes;
            calendar.Date = calendarParam.Date;


            _context.Calendars.Update(calendar);
            _context.SaveChanges();

        }

        public void Delete(Calendar CalendarID)
        {
            var calendar = _context.Calendars.Find(CalendarID);
            if (calendar != null)
            {
                _context.Calendars.Remove(calendar);
                _context.SaveChanges();
            }
        }

    }
}
