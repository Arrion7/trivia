using DL;

namespace BL;

public class StoreBL : IStoreBL
{
    private readonly IStoreDL _repo;
    public StoreBL(IStoreDL repo)
    {
        _repo = repo;
    }

    public User createNewUser(User userToCreate)
    {
        return _repo.createNewUser(userToCreate);
    }

    public async Task<User> getUserAsync(string username)
    {
        return await _repo.getUserAsync(username);
    }


}
