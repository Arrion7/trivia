using Models;
using TriviaDL;

namespace TriviaBL;

public class ConsoleProjBL : IJABL 
{ 
    private readonly IRepo _repo;
    public ConsoleProjBL(IRepo repo)
    {
        _repo = repo;
    }
    public async Task CreateNewAdminAsync(UserPass _newAdmin)
    {
            await _repo.CreateNewAdminAsync(_newAdmin);
    }

    public async Task<List<UserPass>> GetAllAdminsAsync()
    {
        
        return await _repo.GetAllAdminsAsync();
        
    }
    public async Task<List<users>> GetAllUsersAsync()
    {
        return await _repo.GetAllUsersAsync();
    }


    public async Task CreateNewUserAsync(Models.UserPass _newUser)
    {
        await _repo.CreateNewUserAsync(_newUser);
    }

    public async Task<List<users>> SearchUsers(string username)
    {
        return await _repo.SearchUsers(username);
    }
}
