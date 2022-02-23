const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name = "") {
        // call parent constructor
        super(name);
        super(id);
        super(email);

        this.office = office;
    }

    getRole() {
        if (this.role === "Manager") {
            return {
                role: this.role
            }
        } else {
            console.log("Incorrect Role");
        }
    }

}

module.exports = Manager;