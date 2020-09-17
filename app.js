const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/employee");
var teamMembers = [];

const questions = [
  {
    type: "list",
    name: "add",
    message: "Would you like to add an employee profile?",
    choices: ["Yes", "No"] 
  },
  {
    type: "list",
    name: "role",
    message: "What is the employee's position?",
    choices: ["Engineer", "Intern", "Manager"],
    when: (answers) => answers.add === "Yes",
  },
  {
    type: "input",
    name: "name",
    message: "What is the employee's name?",
    when: (answers) => answers.add === "Yes",
  },
  {
    type: "input",
    name: "id",
    message: "What is the employee's id number?",
    when: (answers) => answers.add === "Yes",
  },
  {
    type: "input",
    name: "email",
    message: "What is the employee's email address?",
    when: (answers) => answers.add === "Yes",
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineer's GitHub username?",
    when: (answers) => answers.role === "Engineer", 
  },
  {
    type: "input",
    name: "school",
    message: "What is the intern's school?",
    when: (answers) => answers.role === "Intern", 
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the manager's office number?",
    when: (answers) => answers.role === "Manager", 
  },
]

function init() {
  inquirer.prompt(questions).then(answers => {
    console.log(answers);
    if (answers.add === "No") {
      return;
    }else if(answers.role === "Engineer") {
      let { name, id, email, github } = answers;
      const employee = new Engineer(name, id, email, github);
      teamMembers.push(employee);
    }else if (answers.role === "Intern") {
      let { name, id, email, school } = answers;
      const employee = new Intern(name, id, email, school);
      teamMembers.push(employee);
    }else if (answers.role === "Manager") {
      let { name, id, email, officeNumber } = answers;
      const employee = new Manager(name, id, email, officeNumber);
      teamMembers.push(employee);
    }
    
    init();

  }).then( () => {
    if(!fs.existsSync(OUTPUT_DIR)){
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8")
  }
  )
}


init();
