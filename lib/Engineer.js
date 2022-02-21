const Employee = require("../lib/Employee");

jest.mock = require("../lib/Engineer");
class Engineer extends Employee {
    constructor(name = "") {
        // call parent constructor
        super(name);
        super(id);
        super(email);
    }

    getGitHub() {
        return {
            github: this.github
        }
    }

    getRole() {
        if (this.role === "Engineer") {
            return {
                role: this.role
            }
        } else {
            console.log("Incorrect Role");
        }
    }
}

module.exports = Engineer;