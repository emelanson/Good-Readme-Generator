const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your project's title?",
        name: "projectTitle"
    },
    {
        type: "input",
        message: "Please enter a description for your project.",
        name: "description"
    },
    {
        type: "input",
        message: "Please write any specific installation instructions here.",
        name: "installation"
    },
    {
        type: "input",
        message: "Please write usage guidelines here.",
        name: "usage"
    },
    {
        type: "input",
        message: "Please write guidelines for contribution here.",
        name: "contribution"
    },
    {
        type: "input",
        message: "Please write test instructions here.",
        name: "test"
    },
    {
        type: "list",
        message: "What type of license are you distributing this project under?",
        name: "license",
        choices: ["CC BY", "GNU GPLv3", "MIT", "Other/I'll include my own"]
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers);
        })
        .catch(error => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else when wrong
            }
        });

}

// function call to initialize program
init();

