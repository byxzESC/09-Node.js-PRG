// TODO: Include packages needed for this application
const fs = require('fs');
const generateMD = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = ['What is your GitHub username?', 'What is your email address?', 'What is your project\'s name?', 'Please write a short description of your project', 'What kind of license should your project have?', 'What command should be run to install dependencies?', 'What command should be run to run tests?', 'What does the user need to know about using the repo?', 'What does the user need to know about contributing to the repo?'];

const [userName, email, projectName, description, license, dependencies, testCommand, repoInfo, contribution] = questions;
const licenseChoices = ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'none'];

// TODO: Create a function to write README file
// Acceptances Criteria --- WHEN I am prompted for information about my application repository --- THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) => {
        err ? console.log(err) : console.log(data);
        console.log('generating a README...');
    });
}

// TODO: Create a function to initialize app
    // get all input and generate a readme, THEN pass to writeToFile
function init() {
    inquirer.prompt([
        { type: 'input',  name:'userName',      message: userName },
        { type: 'input',  name:'email',         message: email },
        { type: 'input',  name:'projectName',   message: projectName },
        { type: 'input',  name:'description',   message: description },
        { type: 'list',   name:'license',       message: license,           choices: licenseChoices },
        { type: 'input',  name:'dependencies',  message: dependencies,      default: 'npm i' },
        { type: 'input',  name:'testCommand',   message: testCommand,       default: 'npm test'},
        { type: 'input',  name:'repoInfo',      message: repoInfo },
        { type: 'input',  name:'contribution',  message: contribution }
    ]).then(response => {
        let currentMD = generateMD.generateMarkdown(response);
        // Acceptances Criteria --- WHEN I enter my project title --- THEN this is displayed as the title of the README
        writeToFile(`${response.projectName}-README.md`, currentMD);
    });
}

// Function call to initialize app
init();