const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const util = require("util");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// const writeFileAsync = util.promisify(fs.writeFile);
 const teamMembers = [];


function buildManager() {
    console.log("Please build your manager")
    inquirer.prompt([
        // ask for manager name
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?",
            validate: function (answer) {
                if (answer !== "") {
                    return true;
                } else {
                    return "Must input a name!"
                }
            }
        },
        // ask for manager id
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's id?",
            validate: function (answer) {
                if (answer !== "") {
                    return true;
                } else {
                    return "Must input a name!"
                }
            }
        },
        // ask for manager email
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email?",
            validate: function (answer) {
                if (answer !== "") {
                    return true;
                } else {
                    return "Must input a name!"
                }
            }
        },
        /// whatever else we need
    ]).then(answers => {
        // Use user feedback for... whatever!!
       
        const managerObj = new Manager(answers.managerName, email, id, whatever....)
        Array.push(managerObj)

    }).catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
    });
}

function buildTeam() {
    buildManager()
    buildEMployee....
}

buildTeam();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
render(teamMembers)