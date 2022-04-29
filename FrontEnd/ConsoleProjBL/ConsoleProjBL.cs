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

    public async Task<List<users>> GetAllUsersAsync()
    {
        return await _repo.GetAllUsersAsync();
    }


    public async Task CreateNewUserAsync(string username, string password)
    {
        await _repo.CreateNewUserAsync(username, password);
    }

    public async Task<List<users>> SearchUsers(string username)
    {
        return await _repo.SearchUsers(username);
    }
}
