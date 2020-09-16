// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.


getSchool()

getRole() // Overridden to return 'Intern'

const Employee = require("./employee");

class Intern extends Employee {
  constructor(school) {
    const github = this.github;

    super(name, id, email);
    this.school = school
  }

  getSchool(){

  }

  getRole(){
    this.role === "Intern";

  }
}

const intern = new Intern("USM");
intern.printInfo();