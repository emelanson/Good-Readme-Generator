const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
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

