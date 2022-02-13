function generateReadmeString(answers) {
    
    return `    
    #${answers.title}
    
    ![License](https://img.shields.io/badge/License-MIT-brightgreen)
    
    
    ## Table of Contents
    
    1. [Title](#Title)
    2. [Description](#Description)
    3. [Contents](#contents)
    4. [Installation](#Installation)
    5. [Licenses](#Licenses)
    6. [Contributions](#Contributions)
    7. [Test](#Test)
    8. [Github](#Github)
    9. [Email](#Email)



    #Description
    ${answers.description}
    
    #Contents
    ${answers.contents}
    
    #Installation
    ${answers.installation}
    
    #Usage
    ${answers.usage}

    #Contributions
    ${answers.contributions}
    
    #Tests
    ${answers.tests}
    
    #License
    ${answers.license}
    
    #GitHub
    ${answers.github}
    
    #Email
    ${answers.email}
        `
};

module.exports = generateReadmeString;