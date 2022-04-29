using System.ComponentModel.DataAnnotations;
namespace Models;

public class users
{
    private int id = 0;
    private string userName = "";
    private string passWord = "";

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
}