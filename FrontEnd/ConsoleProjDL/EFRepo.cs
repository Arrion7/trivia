using System.Linq;
using Microsoft.EntityFrameworkCore;
using Models;

namespace TriviaDL;

public class EFRepo : IRepo
{
    private readonly Context _context;
    public EFRepo(Context context)
    {
        _context = context;
    }
    public async Task<List<users>> GetAllUsersAsync()
    {
        return await _context.users.ToListAsync();
    }

    public async Task<List<users>> SearchUsers(string username)
    {
        return await _context.users.Where(x=>x.username == username).ToListAsync();
    }

    public Task CreateNewAdminAsync(Models.UserPass _newAdmin)
    {
        throw new NotImplementedException();
    }


    public Task CreateNewUserAsync(Models.UserPass _newUser)
    {
        throw new NotImplementedException();
    }


    public Task<List<Models.UserPass>> GetAllAdminsAsync()
    {
        throw new NotImplementedException();
    }

} 