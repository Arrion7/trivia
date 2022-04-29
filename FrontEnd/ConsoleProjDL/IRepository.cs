using Models;
namespace TriviaDL;

public interface IRepo
{

    Task CreateNewUserAsync(string username, string password);
    Task<List<users>> GetAllUsersAsync();
    Task<List<users>> SearchUsers(string username);

}

    