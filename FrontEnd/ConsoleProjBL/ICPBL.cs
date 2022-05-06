using Models;
namespace TriviaBL;

public interface IJABL
{
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
    Task CreateNewUserAsync(string username, string password);

    Task<List<DailyQuestion>> GetDailyQuestionAsync();

    

}