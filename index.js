const inquirer = require("inquirer");
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");
const generatePage = require("../src/page-template");
const { writeHTML, copyCSS } = require("../src/generate-site");

function Start() {
    return `
    ===================
    Enter Employee Info
    ===================
    `    
};

Start.prototype.userPrompt = function() {
    inquirer
        .prompt({
            type: "text",
            name: "name",
            message: "What is your team manager's name?"
        },
        {
            type: "text",
            name: "id",
            message: "What is the manager's ID number?"
        },
        {
            type: "text",
            name: "email",
            message: "What is the manager's email address?"
        },
        {
            type: "text",
            name: "office",
            message: "What is the manager's office number?"
        },
        {
            type: "checkbox",
            name: "addNew",
            message: "Would you like to add an Intern or Engineer to the team, or finish the team?",
            choices: ["Intern", "Engineer", "Finish"]
        })
        .then(answers => {
            console.log(answers);
            const manager = new Manager(answers);
            console.log(manager);
        })
}

