using System.ComponentModel.DataAnnotations;
namespace JAModel;

public class Session
{
    private int SessionID;
    private int Score;
    private bool DailyMode = false;
    private int Streak;

    
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
