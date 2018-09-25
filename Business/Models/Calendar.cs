using System;
namespace Business.Models
{
    public class Calendar
    {
        public int CalendarID { get; set; }
        public string CalendarTitle { get; set; }
        public DateTime Date { get; set; }
        public string CalendarNotes { get; set; }
    }
}
