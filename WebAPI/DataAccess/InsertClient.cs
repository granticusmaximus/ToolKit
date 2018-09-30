using System;
using System.Data.SqlClient;
using Npgsql;

namespace WebAPI.Context
{
    public class InsertClient
    {
        class ConnectToDb
        {
            static void Connect(string[] args)
            {
                try
                {
                    SqlConnection conn = new SqlConnection("Data source=localhost; Database=toolkitDB;User Id=postgres;Password=Wats#0529");
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
                        ($"SELECT DATNAME FROM pg_catalog.pg_toolkitDB WHERE DATNAME = '{dbname}'", conn))
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
        class InsertClientData
        {
            static void Main(string[] args)
            {
                try
                {
                    SqlConnection conn = new SqlConnection("Data source=localhost; Database=toolkitDB;User Id=postgres;Password=Wats#0529");
                    conn.Open();
                    SqlCommand cmd = new SqlCommand("INSERT INTO clients values ( fname, lname, phone, businessname, email, businessaddress, city, state, zip, isactive, created_on, updated_on) ;", conn);
                    cmd.ExecuteNonQuery();
                    Console.WriteLine("Inserting Data Successfully");
                    conn.Close();
                }
                catch (Exception e)
                {
                    Console.WriteLine("Exception Occre while creating table:" + e.Message + "\t" + e.GetType());
                }
                Console.ReadKey();

            }
        }
    }
}
