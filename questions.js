const questions = [
    {
      question: "What is the correct way to include an external JavaScript file in your HTML?",
      choices: [
        "<script src='script.js'></script>",
        "<js src='script.js'></js>",
        "<script link='script.js'></script>",
        "<link rel='javascript' href='script.js'>"
      ],
      correctAnswer: "<script src='script.js'></script>"
    },
    {
        question: "Which of the following is a primitive data type in JavaScript?",
        choices: ["Object", "Array", "String", "Function"],
        correctAnswer: "String"
      },
      {
        question: "What does the 'typeof' operator in JavaScript return for the Boolean data type?",
        choices: ["boolean", "string", "object", "number"],
        correctAnswer: "boolean"
      },
      {
        question: "What is the purpose of the 'addEventListener' method in JavaScript?",
        choices: [
          "To create a new event",
          "To handle events asynchronously",
          "To remove an event listener",
          "To add an event handler function to an HTML element"
        ],
        correctAnswer: "To add an event handler function to an HTML element"
      },
      {
        question: "Which keyword is used to declare variables in JavaScript?",
        choices: ["var", "let", "const", "all of the above"],
        correctAnswer: "all of the above"
      }
    ];
    
    export default questions;