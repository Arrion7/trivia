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

    public async Task CreateNewUserAsync(string username, string password)
    {
        users _user = new users(){
            username = username,
            password = password
        };
        await _context.users.AddAsync(_user);
        _context.SaveChanges();
        _context.ChangeTracker.Clear();
    }


    public Task<List<Models.UserPass>> GetAllAdminsAsync()
    {
        throw new NotImplementedException();
    }

} 