//*************************************************************************************************** */
//  This is where we load the tests questions and answers.  Structure of the questions is as     
//  follows:
//  Overall variable "quizzes" is an array containing 1 set of questions needed for each test
//  For simplicity of maintenance, questions for each quiz will be entered into their own variable
//  and then, they will be merged into the variable quizzes
//*************************************************************************************************** */


//*******************************************************
//  Entering questions for the first test:  Development
//*******************************************************

var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },

    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },

    {
        title: "One of the three building blocks of Web development is:",
        choices: ["WWW", "CSS", "KLE", "JJS"],
        answer: "CSS"
      },
  
      {
        title: "DOM stands for:",
        choices: ["Document Object Module", "Domain Objective Module", "Data Object Module", "Documentation Over Material"],
        answer: "Document Object Module"
      },
  
      {
        title: " The 'p' tags in HTML typically enclose",
        choices: ["passive objects", "parsed information", "Polymorphed objects", "paragraphs"],
        answer: "paragraphs"
      },
  
      {
        title: "In development tools, local storage refers to:",
        choices: ["specific web space for programmers", "local hard drive", "office space", "cloud storage"],
        answer: "specific web space for programmers"
      },
  
      {
        title: "How can Boostrap better characterized?",
        choices: ["Web-specific programing language", "CSS framework", "JavaScript library", "HTML extension"],
        answer: "CSS framework"
      },

      {
        title: "When web developers talk about 'floating an element', what do they refer to?",
        choices: ["floating decimal points", "how elements behave around the screen", "Leftover development for phase 2", "Position one element on top of another"],
        answer: "how elements behave around the screen"
      }

  ];

//*************************************** */
//  Loading first questionary into test
//*************************************** */

var quizzes=[];
quizzes.push(questions);


//***************************************************
//  Entering questins for the second test:  finance 
//***************************************************

var questions = [
  {
    title: "NPV stands for:",
    choices: ["Net Periodic Value", "Net Present Value", "New Provision Valuation", "New Present Valuation"],
    answer: "Net Present Value"
  },

  {
    title: "Most commonly used risk-free rate used for financial asset valuation",
    choices: ["LIBOR", "T-bills", "inflation", "0%"],
    answer: "T-bills"
  },

  {
      title: "What does GAAP regulates",
      choices: ["Valuation Methodologies", "Reporting procedures", "Accounting practices", "Nonen of the above"],
      answer: "Accounting practices"
    },

    {
      title: "Can a fiscal and calendar year be the same?",
      choices: ["Never", "always", "no, unless forced by the government", "yes"],
      answer: "yes"
    },

    {
      title: "What is gross profit margin",
      choices: ["Money earned during period", "Sales minus direct costs", "% of sales earned", "Accrued earnings before amortization"],
      answer: "Sales minus direct costs"
    },

    {
      title: "What is a cash flow statement?",
      choices: ["Statement of bank activity", "Financed cash", "All cash inflows and outflows", "cash paid to shareholders"],
      answer: "All cash inflows and outflows"
    },

    {
      title: "Formula to calculate an annuity:",
      choices: ["C/r^n", "N*r/C", "C*N/r", "3.1415*C^n * r"],
      answer: "C/r^n"
    },

    {
      title: "Can owners equity be negative",
      choices: ["yes, it is common", "can never be negative", "has to be negative to declare bankruptcy", "only after a restructuring"],
      answer: "yes, it is common"
    }

];


//*************************************** */
//  Loading second questionary into test
//*************************************** */

quizzes.push(questions);


//*********************************************************
//  Entering questins for the third test:  car maintenance 
//*********************************************************

var questions = [
  {
    title: "In absence of an owner manual, what is a good rule for oil change",
    choices: ["Every 3,000 miles", "Every 5,000 miles", "Every month", "After each long-trip"],
    answer: "Every 5,000 miles"
  },

  {
    title: "What voltage level is used by most non-electric cars",
    choices: ["14V", "12V", "120V", "240V"],
    answer: "14V"
  },

  {
      title: "How often should you align your car",
      choices: ["every month", "every 3 months", "every 6 months", "every year"],
      answer: "every 6 months"
    },

    {
      title: "what happens if you use premium gas on a regular gas car?",
      choices: ["fuel efficiency increase", "longer engine life", "inmediate engine damage", "engine knocking"],
      answer: "engine knocking"
    },

    {
      title: "what does AWD stands for?",
      choices: ["All Wheel Drive", "Average Wheel Diameter", "Advantaged Weight Differential", "Additional Weight Driver"],
      answer: "All Wheel Drive"
    },

    {
      title: "What is the role of the catalytic converter",
      choices: ["converts catalyzation fumes", "Drives fuel efficiency up", "Converts fuel into energy", "converts CO2 to water"],
      answer: "converts CO2 to water"
    },

    {
      title: "Is wheel alignment and wheel balancing the same?",
      choices: ["yes, it is exactly the same", "no, it is not", "no, but they always are done at the same time", "depending on the car"],
      answer: "no, it is not"
    },

    {
      title: "What are typical tire pressures for a sedan car",
      choices: ["25-40 psi", "40-65 psi", "65-100 psi", "higher than 100 psi"],
      answer: "25-40 psi"
    }

];


//*************************************** */
//  Loading third questionary into test
//*************************************** */

quizzes.push(questions);


