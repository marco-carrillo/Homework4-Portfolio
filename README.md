# Purpose of the application

This application allows users to take a quiz that was setup with 8 questions.  The format is multiple choice (4 choices available for each question).  There are three pre-defined quizzes with different topics as follows:  1) Web development, 2) Finance, and 3) Car care.


## Functionality

The application starts by asking the user to enter his or her name.  Although the homework didn't require us to ask for a name upfront and only ask for the name once the user scored higher than the higher score on file, we decided to provide a more personalized experience and proveide the name of the user on the dashboard while the quiz was in progress.

The user will enter his or her name, and the application will wish them good luck and quickly move to start the timer, and provide the first question.

The system will randomly present a quiz to the user.  There is no memory of what quizzes have been provided, and so it is entirely possible that the user will receive the same quiz consecutively.

Once the quiz starts, the user will click in one of the choices that best reflects the answer to the question.

If the user was correct, a green footer with congratulations will appear and, after a delay of one second, will provide the next question.

If the user was incorrect, a red footer will appear indicating the user selected the wrong answer and will display what the correct answer was.  Adittionally, the computer will decrease the clock by 15 seconds.

The quiz ends whenever one of the following two scenarios are reached:  1) The time is up (0 seconds left or lower), or 2) The user answered all of the questions.

##  Metrics displayed during the quiz

The quiz provides the user with ample feedback.  It provides the following information:

1) The total time left
2) The number of remaining questions (which includes the current question that needs to be answered).
3) The top five scores
4) The current user name
5) Number of questions answered correctly
6) Number of questions answered incorrectly


## Scoring and top 5 scorers

The score for the current user will be whatever time left is on the clock when the quiz ends.  Negative scores are allowed.

Upon completion of the quiz, the program will compare the current user score agains the top 5 scores.  If the user scored higher than the lowest top five scores, then the user name will be added  to the top scorer list displacing the lowest top five score.

If the user makes it to the top 5 scores, the program will indicate it and will inmediately add the user name to the table.

## Additional functionality

The application allows for more questions to be added to the existing quizzes, or for new quizzes to be generated.  No programming changes needed other than the addition of new questions/quizzes in the questions.js file.

