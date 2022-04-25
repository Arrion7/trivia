using System.ComponentModel.DataAnnotations;
namespace JAModel;

public class users
{
    private int id = 0;
    private string userName = "";
    private string passWord = "";
    private string firstName = "";
    private string lastName = "";

    [Key]
    public int userid
    {
        get => id;
        set
        {
            id = value;
        }
    }
    public string username
    {
        get => userName;
        set
        {
            userName = value;
        }
    }
    public string password
    {
        get => passWord;
        set
        {
            passWord = value;
        }
    }
    public string firstname
    {
        get => firstName;
        set
        {
            firstName = value;
        }
    }
    public string lastname
    {
        get => lastName;
        set
        {
            lastName = value;
        }
    }
}