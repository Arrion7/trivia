namespace DL;

/// <summary>
/// Interface for accessing data
/// </summary>
public interface IStoreDL
{

    // /// <summary>
    // /// check if customer exists in the dataset.
    // /// </summary>
    // /// <param name="userName">Username of customer.</param>
    // /// <param name="password">Password of customer.</param>
    // User? customerConnexion(string userName, string password);


    /// <summary>
    /// adds a new user
    ///</summary>
    ///<param name="userToCreate"> User object to be inserted or added</param>
    //Task<User> createNewUserAsync(User userToCreate);
    User createNewUser(User userToCreate);


    /// <summary>
    /// get an existant user
    ///</summary>
    ///<param name="userToGet"> User object to be got</param>
    Task<User> getUserAsync(string username);

  



}