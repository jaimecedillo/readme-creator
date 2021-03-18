// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a detailed description of your project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Give installation process for your project:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the project used for?',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List people that contributed to this project.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Chose the license for this project',
            choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"]
        },
        {
            type: 'input',
            name: 'test',
            message: 'Is there any test for project?',
        },
        {
            type: 'input',
            name: 'question',
            message: 'What do I do if I run into an issue?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter your username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your Email:',
        },
    ]);


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
