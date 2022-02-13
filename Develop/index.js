const fs = require ('fs');

const path = require('path');

const inquirer = require('inquirer');

// Write an app to generate README.

const generateReadmeString = require ('./src/markdown');


// Create an array of questions for user input - Get the information from the user through questions
inquirer
.prompt([
    {
        // title-project, 
        message:"What is the name of your project?",
        name:"title",
        type:"input"
    },
    { 
        //Description
       message: "What is your project about?",
       name: "description",
       type: "input",
    },
    {
        //Contents
       message: "what is included in your project?",
       name: "contents",  
       type: "input",
    },
    {
        // Installation Section
        message: "How do you install your project?",
        name: "installation",  
        type: "input",
    },
    {
        //Usage
        message: "how do you use your project?",
        name: "usage",  
        type: "input",
    },
    {
        //Contributions
        message: "where there any other contributors to your project?",
        name: "contributions",  
        type: "text",
    },
    {
        //Test
        message: "How did you test your project?",
        name: "test",  
        type: "text",
    },
    {        
        // License
        message: "what is your license name?",
        name: "license",  
        type: "list",
        choices:["MIT", "Perl", "Unlicensed"],
    },
    {
        //gitHub
        message: "What is your Git Hub username?",
        name:"github",
        type:"input",
    },
    {
        //Email
        message: "What is your Email address?",
        name:"email",
        type:"input",
    },
    
    
]).then((answers)  => {
    console.log(answers);

// Generate a README File - based on answers
    
    const outputPath = path.join(__dirname, 'output', 'README.md');
    
    console.log(outputPath);
    
    const markdown = generateReadmeString(answers);
    
    // Create a function to write README file
    fs.writeFileSync(outputPath, markdown,`utf-8`);
       
    
    console.log(markdown);
});
