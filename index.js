// packages required to do application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown')

// Array of Questions to get started
const questions = [
    // Project name
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
        
    },
    // Description of project
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project',
       
    },
    // Installation Instructions
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
        
    },
    // Usage Information
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
        
        
    },
    // Contribution Guidlines
    {
        type: 'input',
        name: 'contribution',
        message: 'How should people contribute to this project?' ,
        
    },
    // Test Instructions 
    {
        type: 'input',
        name: 'testing',
        message: 'How do you test this project?',
    },
    // License Options
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for your project (Required)',
        choices: ['GPL 3.0', 'MIT', 'BSD 3', 'Apache 2.0', 'None'],
       
    },
      // Github Username
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
       
    },
    // Email Address
    {
        type: 'input',
        name: 'email',
        message: 'Would you like to include your email?',
    },
];
// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Success! Information transferred to the README!')
    });
};
// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();