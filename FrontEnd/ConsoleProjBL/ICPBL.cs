using JAModel;
namespace JAConsoleBL;

public interface IJABL
{
    /// <summary>
    /// Creats a new admin, that can restock inventory, and add new stores if opened up
    /// </summary>
    /// <param name="_newAdmin">Credentials of the new admin</param>
    Task CreateNewAdminAsync(JAModel.UserPass _newAdmin);
    /// <summary>
    /// Gets all administrators from the application
    /// </summary>
    /// <returns>Returns a list of admins to check if the user is an admin</returns>
    Task<List<JAModel.UserPass>> GetAllAdminsAsync();
    /// <summary>
    /// Gets all users from the application, including administrators
    /// </summary>
    /// <returns>Returns a list of users to check if a user currently exists with the same credentials</returns>
    Task<List<users>> GetAllUsersAsync();

    Task<List<users>> SearchUsers(string username);
    
    /// <summary>
    /// Creates a new user in the database that can create orders
    /// </summary>
    /// <param name="_newUser">User credentials</param>
    Task CreateNewUserAsync(JAModel.UserPass _newUser);

    

}