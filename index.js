// TODO: Include packages needed for this application
// installed inquirer with npm

// input: a bunch of user text inputs
// output: a readme
// exception: nothing input or empty spaces .trim()

const fs = require('fs');
const generateMD = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = ['What is your GitHub username?', 'What is your email address?', 'What is your project\'s name?', 'Please write a short description of your project', 'What kind of license should your project have?', 'What command should be run to install dependencies?', 'What command should be run to run tests?', 'What does the user need to know about using the repo?', 'What does the user need to know about contributing to the repo?'];

const [userName, email, projectName, description, license, dependenciesCommand, testCommand, repoInfo, contribution] = questions;

console.log(userName);
// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
    // get all input and generate a readme, THEN pass to writeToFile
function init() {
    let readmeResources = {}

// ask the questions
// wait for input
// store questions[i] as key, and input as value

    inquirer
        .prompt (questions)
        .then((answer) => {
            console.log(answer);
        })

}

// Function call to initialize app
init();

console.log(generateMD.renderLicenseLink(1));