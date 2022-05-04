namespace Models;

public class DailyQuesion{

    private string category;
    private bool questionType;
    private string difficulty;
    private string question;
    private string answer;
    private List<string> incorrect = new List<string>();

    //-----------------------------------------------------------------------

    public string Category {
        get => category;
        
        set 
        {
            category = value;
        }
    }

    public bool QuestionType {
        get => questionType;
        
        set 
        {
            questionType = value;
        }
    }

    public string Difficulty {
        get => difficulty;
        
        set 
        {
            difficulty = value;
        }
    }



    public string Question {
        get => question;

        set 
        {
            question = value;
        }
    }

    public string Answer {
        get => answer;

        set 
        {
            answer = value;
        }
    }

    public List<string> Incorrect {
        get => incorrect;

        set
        {
            incorrect = value;
        }
    }

}