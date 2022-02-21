const inquirer = require("inquirer");
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

const userPrompt = employeeData => {
    // create an employeeData array if there is none
    if (!employeeData) {
        employeeData = [];
    }
    return inquirer.prompt([
        {
            type: "text",
            name: "name",
            message: "What is your employee's name?"
        },
        {
            type: "text",
            name: "id",
            message: "What is your employee's ID number?"
        },
        {
            type: "text",
            name: "email",
            message: "What is your employee's email address?"
        },
        {
            type: "text",
            name: "role",
            message: "What is your employee's Role?",
        },
        {
            type: "text",
            name: "office",
            message: "What is your manager's office number?",
            when: ({ role }) => {
                if (role === "Manager") {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "text",
            name: "github",
            message: "What is your engineer's GitHub?",
            when: ({ role }) => {
                if (role === "Engineer") {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "text",
            name: "school",
            message: "What school does your intern attend?",
            when: ({ role }) => {
                if (role === "Intern") {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "confirmNewEmployee",
            message: "Would you like to add another employee?",
            default: false
        }
    ])
    .then(employeeInfo => {
        employeeData.push(employeeInfo);
        if (employeeInfo.confirmNewEmployee) {
            return userPrompt(employeeData);
        } else {
            return employeeData;
        }
    });
};
    
function Start() {
    console.log(`
    ===================
    Enter Employee Info
    ===================
    `);
};

// Prototype to get user input
Start.prototype.userInput = function() {
    // inquirer prompt for employee information
    userPrompt().then(employeeData => {
        console.log(employeeData);
    });
}

module.exports = Start;