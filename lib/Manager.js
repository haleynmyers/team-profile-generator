// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./employee");

class Manager extends Employee {
  constructor(officeNumber) {
    const officeNumber = this.officeNumber;

    super(name, id, email);
    this.officeNumber = officeNumber
  }

  getOfficeNumber(){

  }

  getRole(){
    this.role === "Manager";
  }
}

const manager = new Manager("100");
manager.printInfo();