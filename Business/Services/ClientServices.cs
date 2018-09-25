using System;
using System.Data;
using System.Data.SqlClient;

namespace Business.Services
{
    public class ClientServices
    {
        class InsertData
        {
            static void Main(string[] args)
            {
                try
                {
                    SqlConnection conn = new SqlConnection("Data source=localhost; Database=toolkitDB;User Id=postgres;Password=Wats#0529");
                    conn.Open();
                    SqlCommand cmd = new SqlCommand("INSERT INTO clients ( fname, lname, phone, businessname, email, businessaddress, city, state, zip, isactive, created_on, updated_on) values ( @fname, @lname, @phone, @businessname, @email, @businessaddress, @city, @state, @zip, @isactive, @created_on, @updated_on) ;", conn);
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
