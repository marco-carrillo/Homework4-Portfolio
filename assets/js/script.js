//********************************************************************************/
// This function will take the variable quizzes (an array of array)
// and will administer the quiz.  Responsibility of this script is as follows:
// 1.  Will set timer
// 2.  Will compare questions and the answer and grade the answer
// 3.  Will update the score
// 4.  Will stop the quiz when time runs out or user answers the questions
// 5.  Manage time (adding and deducting time left)
// 6.  Update and display highest score
//********************************************************************************/


//********************************************************************************/
//  Following function access the computer local storage and retrieves the        /
//  last five scores.  Responsibility of having those scored sorted and updated   /
//  is within the function that scores the test and determines if user score      /
//  can be included as one of the top 5 scores.                                   /
//********************************************************************************/

function displays_top_scores(){

    if(top_scores===null) {
        top_scores=[["No scores yet",0],["No scores yet",0],["No scores yet",0],["No scores yet",0],["No scores yet",0]];
    }
    document.getElementById("N1score").textContent=top_scores[0][0]+", "+top_scores[0][1];
    document.getElementById("N2score").textContent=top_scores[1][0]+", "+top_scores[1][1];
    document.getElementById("N3score").textContent=top_scores[2][0]+", "+top_scores[2][1];
    document.getElementById("N4score").textContent=top_scores[3][0]+", "+top_scores[3][1];
    document.getElementById("N5score").textContent=top_scores[4][0]+", "+top_scores[4][1];
}

//********************************************************************************/
//  Following function ends the quiz, updates score, cleans up the background     /
//  and calls a new html form that will display how that person stacked agains    /
//  the last five highest scores.                                                 /
//********************************************************************************/

function ends_quiz(){

    // Removes event listeners so that user can't continue answering

    document.getElementById("MultipleChoice1").removeEventListener("click",checks_answers);
    document.getElementById("MultipleChoice2").removeEventListener("click",checks_answers);
    document.getElementById("MultipleChoice3").removeEventListener("click",checks_answers);
    document.getElementById("MultipleChoice4").removeEventListener("click",checks_answers);
    
    //  Clear the interval set for the timer
    clearInterval(timer_variable);

    //  Total score is actually the time left, variable total_quiz_time is the score for this user
    //  checks if score is highest than the lowest score.
    //  top_scorers is a 2x5 matrix, in the first element it will hold the name, the second will hold
    //  the score.  It will be sorted so that the first one is the top scorer.

    if(total_quiz_time>top_scores[4][1]){

       //  adds user to the last of the array
       top_scores.push([player_name,total_quiz_time]);

       //  sorting the array (with 6 top scorers) based on second column
       top_scores=top_scores.sort(function(a,b) {return b[1]-a[1];})

       //  eliminating the last one of the array so that it is five users
       top_scores.pop();

       //  writing to local storage
       localStorage.setItem('top_scores', JSON.stringify(top_scores));

       //  displaying the new updated list of players
       displays_top_scores();

       //  Displays a congratulating message
        $.confirm({
            title: 'End of quiz',
            content: "Thanks for playing today.  Your score was "+total_quiz_time+" and you have made it to the 5 top scores",
            type: 'green',
            typeAnimated: true,
            buttons: {
                close: function () {
                }
            }
        });
    }else {

        //  user didn't make it to the top so that there is a message stating so

        $.confirm({
            title: 'End of quiz',
            content: "Thanks for playing today.  Your score was "+total_quiz_time+", unfortunately, you didn't make it to the top five scores",
            type: 'red',
            typeAnimated: true,
            buttons: {
                close: function () {
                }
            }
        });  // end of message
    }        // end if if

};           // end of function


//************************************************************************************************/
//  Following function manages the event timer every second setup at the beggining of this code  */
//************************************************************************************************/

function timer_function() {
    if(total_quiz_time>0){  
        total_quiz_time--
        document.getElementById("RemainingTime").textContent="Remaining time:  "+total_quiz_time; 
    }
    else {ends_quiz()};
    }

//***************************************************************************************/
//  Following function asks a question, sets the values on the buttons so the user can  */
//  chose and pick.  Receives a value, which is the index for the array of questions    */
//***************************************************************************************/

function sets_question(question) {
    document.getElementById("CurrentQuestionDisplayed").textContent=quizzes[quiz_number][question].title;
    document.getElementById("MultipleChoice1").textContent=quizzes[quiz_number][question].choices[0];
    document.getElementById("MultipleChoice2").textContent=quizzes[quiz_number][question].choices[1];
    document.getElementById("MultipleChoice3").textContent=quizzes[quiz_number][question].choices[2];
    document.getElementById("MultipleChoice4").textContent=quizzes[quiz_number][question].choices[3];
}

//**************************************************************/
//  The following function restore the footer to its default   */
//  color after a user either gets it rigth or wrong.          */
//**************************************************************/


function restore_header(){
    document.getElementById("right_or_wrong_msg").textContent="";  // clears message
    document.getElementById("footer_container").setAttribute("class","row bottom-class")   // restore default styling
}

//************************************************************************************** */
//  The following function is called whenever the user makes a selection.                */
//  This function will make the determination of whether the answer is right or wrong    */
//  and will take the appropriate actions                                                */
//************************************************************************************** */

function checks_answers(event) {

    // determining which buttom the user clicked

    if(event.target.id==="MultipleChoice1") {var user_answer=0}
    else if (event.target.id==="MultipleChoice2") {var user_answer=1}
    else if (event.target.id==="MultipleChoice3") {var user_answer=2}
    else if (event.target.id==="MultipleChoice4") {var user_answer=3}

    // evaluating whether the answer is correct or not

    if(quizzes[quiz_number][current_question].choices[user_answer]===quizzes[quiz_number][current_question].answer) {     // true if user answered correctly
        correct_answers++  // keeps track of correct answers
        document.getElementById("NbrRightAnswers").textContent="# correct: "+correct_answers;  // updates # correct answers 
        document.getElementById("right_or_wrong_msg").textContent="You are absolutely right!!!! keep up the good work!!!!";  // provides feedback
        document.getElementById("footer_container").setAttribute("class","row bottom-class-correct align-self-center")  // formats feedback box (footer)
        setTimeout(restore_header,1000);  // delay for user to read
    } else {   // The user answered incorrectly
        incorrect_answers++                   //  keeps track of incorrect answers
        total_quiz_time=total_quiz_time-15;   //  15 seconds penalty
        document.getElementById("RemainingTime").textContent="Remaining time:  "+total_quiz_time;  // Updates timer 
        document.getElementById("NbrWrongAnswers").textContent="# incorrect: "+incorrect_answers;   // Updates # incorrect answers
        document.getElementById("right_or_wrong_msg").textContent="Incorrect!!!.  Correct answer is "+quizzes[quiz_number][current_question].answer;  // provides feedback
        document.getElementById("footer_container").setAttribute("class","row bottom-class-incorrect")  // formats the feedback box (footer)
        setTimeout(restore_header,1000);  //  delay so that user can read the feedback
    }

    //  Advances to the next question and puts it out for the user to answer.  If all question have been 
    //  answered, then it ends the quiz.

    if(current_question<quizzes[quiz_number].length-1) {
        current_question++
        sets_question(current_question)
    } else {ends_quiz()};
}

   
//****************************************************************************************** */
//  Asking for users's name.  It will only asks once and if user wants to continue playing,
//  that name will be used until user quits
//****************************************************************************************** */

function asks_name(){

    //  asking for user name

 
    do{
    $.MessageBox({
        input    : true,
        message  : "What's your name?"
      }).done(function(player_name){
        if ($.trim(player_name)) {
          $.MessageBox("Hi <b>"+player_name+"</b>!");
         }
      });
    } while (player_name.length<=0);

    // Updating user name on dashboard

    document.getElementById("CurrentPlayerName").textContent="Current Player:  "+player_name;


}  //function asks name


//*************************************************************************************************************/
//  Asks for user's name upfront once, at the beginning.  User can continue playing as much as it wants
//  but will only ask for user once.
//  Then sets all of the variables, and starts the test
//*************************************************************************************************************/


var correct_answers=0;                       // Holds number of questions user has answered correctly
var incorrect_answers=0;                     // Holds number of questions user has answered incorrectly
var top_scores=JSON.parse(localStorage.getItem("top_scores"))  //  Array with top 5 scorers.  Values retrieved from local storage
var player_name='';                          // Holds player name
asks_name();

console.log(player_name)

if(player_name.length>0){                    // Name shouldn't be empty
    
    var quiz_number=Math.floor(Math.random()*3);           //  contains the quiz number.  Could be 0, 1, or 2.
    var total_quiz_time=15*quizzes[quiz_number].length;    // Total time allowed to finish the quiz (15 seconds per question
    timer_variable=setInterval(timer_function, 1000);
    document.getElementById("QuizNumber").textContent="Quiz number: "+quiz_number;
    document.getElementById("RemainingTime").textContent="Remaining time:  "+total_quiz_time; 
    document.getElementById("MultipleChoice1").addEventListener("click",checks_answers);
    document.getElementById("MultipleChoice2").addEventListener("click",checks_answers);
    document.getElementById("MultipleChoice3").addEventListener("click",checks_answers);
    document.getElementById("MultipleChoice4").addEventListener("click",checks_answers);

    //  Calls the first question.  Subsequent questions are called by the evaluator after a click event

    var current_question=0;
    displays_top_scores();
    sets_question(current_question);
}
