const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        // call parent constructor
        super(name, id, email);
        this.role = "Intern";
        this.school = school;
        
    }

    // getSchool() {
    //     return {
    //         school: this.school
    //     }
    // }
    
    // getRole() {
    //     if (this.role === "Intern") {
    //         return {
    //             role: this.role
    //         }
    //     } else {
    //         console.log("Incorrect Role")
    //     }
    // }
    getDescription() {
        return `The ${this.role} is ${this.name} his id is ${this.id} his email is ${this.email} and he goes to ${this.school}`;
    }
}

module.exports = Intern;