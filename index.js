const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'pepsi_db'
})
console.log("Hello! Welcome to the Pepsi DB! (Hold CTRL + C to Exit!)")

console.log("Be sure you have used SOURCE + the /path/ of both .sql files.")



const mainQuestion = {
        type: "list",
        name: "mainOption",
        message: "What would you like to do?",
        choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update Employee Role", "Exit"]
    }
    
    theQuestion()

function theQuestion() {
inquirer
    .prompt(mainQuestion)
    .then((answers) => {
        switch (answers.mainOption) {
            case "View All Departments":
                viewDepartment()
                break;

            case "View All Roles":
                viewRole()
                break;

            case "View All Employees":
                viewEmployee()
                break;

            case "Add a Department":
                addDepartment()
                break;

        }
    })
}

function viewDepartment() {
    db.query(`SELECT * FROM departments`, function (err, results) {
                    console.table(results)
                })
        theQuestion();
}
function viewRole() {
    db.query(`SELECT * FROM role`, function (err, results) {
                    console.table(results)
                })
        theQuestion();
}
function viewEmployee() {
    db.query(`SELECT * FROM employee`, function (err, results) {
                    console.table(results)
                })
        theQuestion();
}
function addDepartment(){
    inquirer
         .prompt({
             type:"input",
             name: "deptName",
             message:"Please enter department name:"
         })
         .then((answer) => {
             console.log(answer)
             let userChoice = answer.deptName
             console.log(userChoice)

             db.query(`INSERT INTO departments(name) VALUES ("${userChoice}")`, function (err, results) {
             //console.log(results);
             });
             viewDepartment();
         })
     }

