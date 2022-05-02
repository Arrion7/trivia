using System.ComponentModel.DataAnnotations;
namespace Models;

public class Session
{
    private int sessionId;
    private int score;
    private bool dailyMode = false;
    private int streak;

    
    public int SessionID 
    {
        get => sessionId;
        set
        {
            sessionId = value;
        }
    }
    public int Score
    {
        get => score;
        set
        {
            score = value;
        }
    }
    public bool DailyMode
    {
        get => dailyMode;
        set
        {
            //Greate if statement to determine if its been completed
        }
    }

    public int Streak
    {
        get => streak;
        set
        {
            streak = value;
        }
    }

}
