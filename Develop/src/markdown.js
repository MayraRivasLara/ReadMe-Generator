function generateReadmeString(answers) {
    
    return `    
    # Table of Contents
    
    3. [Title](#Title)
    4. [Description](#Description)
    6. [Contents](#contents)
    5. [Installation](#Installation)
    7. [Licenses](#Licenses)
    8. [Contributions](#Contributions)
    9. [Test](#Test)
    1. [Github](#Github)
    2. [Email](#Email)

    #${answers.title}

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