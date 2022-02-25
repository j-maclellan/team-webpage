const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, office) {
        // call parent constructor
        super(name, id, email);
        this.role = "Manager";
        this.office = office;
    }
    getRole() {
        return {
            role: this.role
        }
    }  
    // getDescription() {
    //     return `The ${this.role} is ${this.name} his id is ${this.id} his email is ${this.email} and he is in office #: ${this.office}`;
    // }
};
module.exports = Manager;