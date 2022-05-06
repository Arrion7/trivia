using System.ComponentModel.DataAnnotations;
namespace Models;

public class DailyQuestion
{

    private int id;
    private string question = "";
    private string ans = "";
    private string notAns1 = "";
    private string notAns2 = "";
    private string notAns3 = "";

    //-----------------------------------------------------------------------

    [Key]
    public int Id {
        get => id;
        
        set 
        { 
            id = value; 
        } 
    }

    public string Question {
        get => question;

        set 
        {
            question = value;
        }
    }

    public string Ans {
        get => ans;

        set 
        {
            ans = value;
        }
    }

    public string NotAns1 {
        get => notAns1;

        set
        {
            notAns1 = value;
        }
    }

    public string NotAns2 {
        get => notAns2;

        set
        {
            notAns2 = value;
        }
    }

    public string NotAns3 {
        get => notAns3;

        set
        {
            notAns3 = value;
        }
    }

}