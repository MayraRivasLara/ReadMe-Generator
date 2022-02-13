// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: "text",
        name: "title",
        message: "What is the name of your Project?",
    },
    {
        type: "text",
        name: "contents",  
        message: "what is included in your project?",
    },
    {
        type: "text",
        name: "instalation",  
        message: "How do you install your project?",
    },
    {
        type: "text",
        name: "usage",  
        message: "how do you use your project?",
    },
    {
        type: "text",
        name: "contributions",  
        message: "where there any other contributors to your project?",
    },
    {
        type: "text",
        name: "test",  
        message: "How did you test your project?",
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
