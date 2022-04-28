using Models;
namespace TriviaDL;

public interface IRepo
{

    Task CreateNewUserAsync(Models.UserPass _newUser);
    Task CreateNewAdminAsync(Models.UserPass _newAdmin);
    Task<List<Models.UserPass>> GetAllAdminsAsync();
    Task<List<users>> GetAllUsersAsync();


    Task<List<users>> SearchUsers(string username);

}

    