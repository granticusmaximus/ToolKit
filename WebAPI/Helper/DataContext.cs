using System;
using Business.Entities;
using Microsoft.EntityFrameworkCore;

namespace WebAPI.Helper
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}
