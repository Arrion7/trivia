using Models;
//found how to add timer so i am fixing this lol

private double scores;

public double Scores { get;  set; }
    double easyDifficulty = 1000;
    double medDifficulty = 1500;
    double hardDifficulty = 2000;

    double responseTime;
    double questTime;

    foreach (double scores in Scores)
    {
    void easyScore()
    {       
        double easyScores = (1 - ((responseTime / questTime) / 2)) * easyDifficulty;
    }

    void medScores()
    {       
        double medScores = (1 - ((responseTime / questTime) / 2)) * medDifficulty;
    }

    void hardScores()
    {       
        double scores = (1 - ((responseTime / questTime) / 2)) * hardDifficulty;
    }
}

public void HighScores()
{ 

}




#endregion