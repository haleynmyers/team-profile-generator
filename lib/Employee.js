//Constructor that has info shared by all emloyees
class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    getName(answers) {
        return this.name;
    }
    getId(answers) {
        return this.id;
    }
    getEmail(answers) {
        return this.email;
    }
    getRole(answers) {
        
        if(answers === "Engineer"){
            this.role = "Engineer";

        }else if(answers === "Intern"){
            this.role = "Intern";

        }else if(answers === "Manager"){
            this.role = "Manager";

        }
    }
}
module.exports = Employee;

