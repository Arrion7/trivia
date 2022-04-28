using Microsoft.Data.SqlClient;
using System.Data;
using Models;
using System.ComponentModel.DataAnnotations;

namespace DL;
public class StoreDL : IStoreDL
{

    private readonly string _connectionString;


    /// <summary>
    /// define or initialise a connexion information
    /// </summary>
    public StoreDL(string connectionString)
    {
        _connectionString = connectionString;
    }

    // /// <summary>
    // /// check if customer exists in the dataset.
    // /// </summary>
    // /// <param name="userName">Username of customer.</param>
    // /// <param name="password">Password of customer.</param>
    // /// <returns>Return null or somes informations about the customer.</returns>

    // User? customerConnexion(string userName, string password)
    // {

    // }

    public User createNewUser(User userToCreate)
    {
        //add customer
        DataSet customerSet = new DataSet();

        using SqlConnection connection = new SqlConnection(_connectionString);
        using SqlCommand cmd = new SqlCommand("SELECT * FROM users WHERE userid = -1", connection);

        SqlDataAdapter customerAdapter = new SqlDataAdapter(cmd);

        customerAdapter.Fill(customerSet, "CustomerTable");

        DataTable? customerTable = customerSet.Tables["CustomerTable"];
        if (customerTable != null)
        {
            DataRow newRow = customerTable.NewRow();
            newRow["username"] = userToCreate.UserName;
            newRow["password"] = userToCreate.Password;

            customerTable.Rows.Add(newRow);

            SqlCommandBuilder commandBuilder = new SqlCommandBuilder(customerAdapter);
            SqlCommand insert = commandBuilder.GetInsertCommand();

            customerAdapter.InsertCommand = insert;

            try
            {
                customerAdapter.Update(customerTable);
                return userToCreate;
            }
            catch (Exception)
            {
                return null!;
            }
        }
        return null!;
    }

    public async Task<User> getUserAsync(string username)
    {
        return await Task.Factory.StartNew(() =>
                {
                    DataSet customerSet = new DataSet();
                    User userToGet = new User();
                    using SqlConnection connection = new SqlConnection(_connectionString);
                    using SqlCommand cmd = new SqlCommand("SELECT * FROM users WHERE username = @username", connection);
                    cmd.Parameters.AddWithValue("@username", username);

                    SqlDataAdapter customerAdapter = new SqlDataAdapter(cmd);

                    customerAdapter.Fill(customerSet, "CustomerTable");

                    DataTable? customerTable = customerSet.Tables["CustomerTable"];
                    if (customerTable != null && customerTable.Rows.Count > 0)
                    {
                        userToGet.ID = (int)customerTable.Rows[0]["userid"];
                        userToGet.Password = (string)customerTable.Rows[0]["password"];
                        userToGet.UserName = username;
                        //userToGet.Status = 1;
                        return userToGet;
                    }

                    return null!;
                });
    }

  
   
   

}
