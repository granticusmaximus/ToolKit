using System;
namespace WebAPI.Models
{
    public class User
    {
        public User()
        {
            this.Email = string.Empty;
            this.FirstName = string.Empty;
            this.LastName = string.Empty;
        }
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public bool isActive { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

    }
}
