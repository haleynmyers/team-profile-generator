// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./employee");

class Engineer extends Employee {
  constructor(github) {
    const github = this.github;

    super(name, id, email);
    this.github = github
  }

  getGithub(){

  }

  getRole(){
    this.role === "Engineer";
  }
}

const engineer = new Engineer("haleynmyers");
engineer.printInfo();