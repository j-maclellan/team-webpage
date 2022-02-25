const inquirer = require("inquirer");
// const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generatePage = require("./src/page-template");
const { writeHTML, copyCSS } = require("./src/generate-site");

function Start() {
    this.employeeArray = [];
    this.interns = [];
    this.engineers = [];
    console.log(`This is the start of the application!`);
    getManager();
};

function addEmployee() {
    return inquirer
            .prompt({
                type: "list",
                name: "action",
                message: "Would you like add an: 'Intern' or 'Engineer' to the team or 'Finish' building team?",
                choices: [ "Intern", "Engineer", "Finish"]
            })
            .then(({ action }) => {
                if (action === "Intern") {
                    console.log("_______________");
                    getIntern();
                } else if (action === "Engineer") {
                    console.log("_______________");
                    getEngineer();
                } else {
                    console.log("_______________");
                    this.employeeArray.push(this.interns, this.engineers);
                    
                    console.log(generatePage(employeeArray));
                }
            })
}

function getManager() {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Who is the Manager on your team?"
            },
            {
                type: "input",
                name: "id",
                message: "What is your Manager's ID number?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the Manager's email?"
            },
            {
                type: "input",
                name: "office",
                message: "What is the Manager's office Number?"
            }])
            .then(answers => {
                console.log(answers);
                // destructure
                const { name, id, email, office } = answers
                this.manager = new Manager(name, id, email, office);
                this.employeeArray.push(this.manager);
                console.log(this.manager.getRole());
                console.log(employeeArray);
                addEmployee();
            });
}

function getIntern() {
    return inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the Intern's name?"
                },
                {
                    type: "input",
                    name: "id",
                    message: "What is the Intern's ID number?"
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is the Intern's email?"
                },
                {
                    type: "input",
                    name: "school",
                    message: "What school does the Intern attend?"
                }])
                .then(answers => {
                    // destructure
                    const { name, id, email, school } = answers
                    this.intern = new Intern(name, id, email, school);
                    this.interns.push(this.intern);
                    console.log(this.intern.getRole());
                    console.log(employeeArray);
                    addEmployee();
                })
}

function getEngineer() {
    return inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the Engineer's name?"
                },
                {
                    type: "input",
                    name: "id",
                    message: "What is the Engineer's ID number?"
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is the Engineer's email?"
                },
                {
                    type: "input",
                    name: "github",
                    message: "What is the Engineer's github?"
                }])
                .then(answers => {
                    // destructure
                    const { name, id, email, github } = answers
                    this.engineer = new Engineer(name, id, email, github);
                    this.engineers.push(this.engineer);
                    console.log(this.engineer.getRole());
                    console.log(employeeArray);
                    addEmployee();
                })
}
Start();
