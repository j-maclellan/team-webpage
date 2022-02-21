const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(name = "") {
        // call parent constructor
        super(name);
        super(id);
        super(email);
    }

    getSchool() {
        return {
            school: this.school
        }
    }
    
    getRole() {
        if (this.role === "Intern") {
            return {
                role: this.role
            }
        } else {
            console.log("Incorrect Role")
        }
    }
}

module.exports = Intern;