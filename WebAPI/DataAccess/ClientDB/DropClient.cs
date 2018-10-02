using System;
using System.Data.SqlClient;

namespace WebAPI.Context
{
    public class DropClient
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

        class DropClientData
        {
            static void Main(string[] args)
            {
                try
                {
                    SqlConnection conn = new SqlConnection("Data source=localhost; Database=toolkitDB;User Id=postgres;Password=Wats#0529");
                    conn.Open();
                    SqlCommand cmd = new SqlCommand("DROP TABLE IF EXISTS clients; ", conn);
                    cmd.ExecuteNonQuery();
                    Console.WriteLine("Dropped Table Successfully");
                    conn.Close();
                }
                catch (Exception e)
                {
                    Console.WriteLine("Exception Occre while dropping table:" + e.Message + "\t" + e.GetType());
                }
                Console.ReadKey();

            }
        }
    }
}
