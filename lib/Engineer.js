const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // call parent constructor
        super(name, id, email);
        this.role = "Engineer";
        this.github = github;
        
    }

    // getGitHub() {
    //     return {
    //         github: this.github
    //     }
    // }

    // getRole() {
    //     if (this.role === "Engineer") {
    //         return {
    //             role: this.role
    //         }
    //     } else {
    //         console.log("Incorrect Role");
    //     }
    // }
    getDescription() {
        return `The ${this.role} is ${this.name} his id is ${this.id} his email is ${this.email} and his GitHub is ${this.github}`;
    }
}

module.exports = Engineer;