// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'What command should be run to run tests?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing to the repo?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const filePath = path.join(process.cwd(), fileName);
    return fs.writeFileSync(filePath, generateMarkdown(data))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
        writeToFile('README.md', answers) })
}

// Function call to initialize app
init();

