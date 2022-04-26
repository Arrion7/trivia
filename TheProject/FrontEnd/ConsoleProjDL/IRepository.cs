using JAModel;
namespace JAConsoleDL;

public interface IRepo
{

    Task CreateNewUserAsync(JAModel.UserPass _newUser);
    Task CreateNewAdminAsync(JAModel.UserPass _newAdmin);
    Task<List<JAModel.UserPass>> GetAllAdminsAsync();
    Task<List<users>> GetAllUsersAsync();
    Task SaveAdminsAsync(); 

}

    