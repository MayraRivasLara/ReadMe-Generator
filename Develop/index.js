// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: "text",
        message: "Proyect title?",
        name: "ReadMe Generator",
    },
    {
        type: "text",
        message: "Where are you from?",
        Country: "El Salvador",  
    },
    {
        type: "text",
        message: "How old are you?",
        age: "44",  
    },
    {
        type: "text",
        message: "Where do you live?",
        location: "Australia",  
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
