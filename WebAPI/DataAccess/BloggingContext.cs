using Microsoft.EntityFrameworkCore;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace WebAPI.DataAccess
{
    public class BloggingContext : DbContext
    {
        public DbSet<Blog> Blogs { get; set; }
        public DbSet<Post> Posts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            try
            {
                SqlConnection conn = new SqlConnection("Data source=localhost; Database=empireDB;User Id=postgres;Password=Wats#0529");
                conn.Open();
                Console.WriteLine("Connected to Database Successfully");
                conn.Close();
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception occurred while connecting to:" + e.Message + "\t" + e.GetType());
            }
            Console.ReadKey();
        }
    }

    class ConnectToDb
    {
        static void Connect(string[] args)
        {
            try
            {
                SqlConnection conn = new SqlConnection("Data source=localhost; Database=empireDB;User Id=postgres;Password=Wats#0529");
                conn.Open();
                Console.WriteLine("Connected to Database Successfully");
                conn.Close();
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception occurred while connecting to:" + e.Message + "\t" + e.GetType());
            }
            Console.ReadKey();

        }
    }

    class CheckDb
    {
        public bool CheckifDbExist(string connectionStr, string dbname)
        {
            using (NpgsqlConnection conn = new NpgsqlConnection(connectionStr))
            {
                using (NpgsqlCommand command = new NpgsqlCommand
                    ($"SELECT DATNAME FROM pg_catalog.pg_empireDB WHERE DATNAME = '{dbname}'", conn))
                {
                    try
                    {
                        conn.Open();
                        var i = command.ExecuteScalar();
                        conn.Close();
                        if (i.ToString().Equals(dbname)) //always 'true' (if it exists) or 'null' (if it doesn't)
                            return true;
                        else return false;
                    }
                    catch (Exception e) { return false; }
                }
            }
        }
    }

    public class Blog
    {
        public int BlogId { get; set; }
        public string Url { get; set; }
        public int Rating { get; set; }
        public List<Post> Posts { get; set; }
    }

    public class Post
    {
        public int PostId { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }

        public int BlogId { get; set; }
        public Blog Blog { get; set; }
    }
}