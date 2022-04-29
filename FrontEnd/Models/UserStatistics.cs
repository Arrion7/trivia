namespace Models;

public class UserStatistics{

    private string category;
    private string question;
    public int UserID{
        get; 
        set;}

        public int StatsID{
        get; 
        set;}

        public int HighScore{
        get; 
        set;}

    public string Category {
        get => category;
        
        set 
        {
            category = value;
        }
    }
 public string Question {
        get => question;

        set 
        {
            question = value;
        }
    }
    public int Streak{
        get; 
        set;}

}