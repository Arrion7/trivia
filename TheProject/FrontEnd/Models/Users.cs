namespace JAModel;

public class Users
{
    private int id = 0;
    private string userName = "";
    private string passWord = "";
    private string firstName = "";
    private string lastName = "";

    public int Id
    {
        get => id;
        set
        {
            id = value;
        }
    }

    public string UserName
    {
        get => userName;
        set
        {
            userName = value;
        }
    }
    public string PassWord
    {
        get => passWord;
        set
        {
            passWord = value;
        }
    }
    public string FirstName
    {
        get => firstName;
        set
        {
            firstName = value;
        }
    }
    public string LastName
    {
        get => lastName;
        set
        {
            lastName = value;
        }
    }
}