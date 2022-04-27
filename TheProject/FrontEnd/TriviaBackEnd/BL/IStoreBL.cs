namespace BL;

public interface IStoreBL
{
    User createNewUser(User userToCreate);
    Task<User> getUserAsync(string username);




}