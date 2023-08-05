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
                    viewRole();
                    
                    break;

                case "View All Employees":
                    viewEmployee();
                    
                    break;

                case "Add a Department":
                    addDepartment();
                    
                    break;

                case "Add a Role":
                    addRole();
                    
                    break;

                case "Add an Employee":
                    addEmployee();
                    
                    break;

                case "Update Employee Role":
                    updateEmployee();
                    
                    break;

                case "Exit":
                    console.log("Goodbye  (CTRL  + C)");
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
    theQuestion()
}
function viewEmployee() {
    db.query(`SELECT * FROM employee`, function (err, results) {
        console.table(results)
    })
    theQuestion()
}
function addDepartment() {

    db.query(`SELECT * FROM departments`, function (err, results) {
        console.table(results)
    })

    inquirer
        .prompt({
            type: "input",
            name: "deptName",
            message: "Please enter a new department name:"
        })
        .then((answer) => {

            let userChoice = answer.deptName
            console.log(userChoice)

            db.query(`INSERT INTO departments(name) VALUES ("${userChoice}")`, function (err, results) {
                //console.log(results);
            });
            viewDepartment();
        })
}

function addRole() {

    db.query(`SELECT * FROM departments`, function (err, results) {
        console.table(results)
    })

    inquirer
        .prompt([
            {
                type: "input",
                name: "roleDept",
                message: "Please enter the department this is assigned to (View Table):"
            },
            {
                type: "input",
                name: "roleName",
                message: "Please enter a new role name:"
            },
            {
                type: "input",
                name: "roleSalary",
                message: "Please enter a new role salary:"
            }
        ]
        )
        .then((answs) => {
            console.log(answs.roleDept, answs.roleName, answs.roleSalary)

            db.query(`INSERT INTO role (title, salary, department_id) VALUES ("${answs.roleName}", "${answs.roleSalary}", "${answs.roleDept}")`, function (err, results) {
                //console.log(results);
            });
            viewRole();
        })

}

function addEmployee() {

    db.query(`SELECT * FROM role`, function (err, results) {
        console.table(results)
    })

    inquirer
        .prompt([
            {
                type: "list",
                name: "empRole",
                message: "Please select the role ID number this Employee assigned to (View Table [1, 4, 7, 10, 13 are Supervisor Positions]):",
                choices: ["1", "2", "3", "4", "5", "6",
                    "7", "8", "9", "10", "11", "12", "13", "14", "15"]
            },
            {
                type: "input",
                name: "empFirst",
                message: "Please enter a first name:"
            },
            {
                type: "input",
                name: "empLast",
                message: "Please enter a last name:"
            },
            {
                type: "list",
                name: "empManager",
                message: "Based on the role, enter a corresponding Manager-ID (Main WH Supe's M-ID: 2, ASRS Supe's M-ID: 5, GES Supe's M-ID: 1, MEW Supe's M-ID: 4, Production Supe's M-ID: 3 [If you are a Manager, select null]):",
                choices: ["2", "5", "1", "4", "3", "null"]
            }
        ]
        )
        .then((answs) => {
            console.log(answs.empRole, answs.empFirst, answs.empLast, answs.empManager)

            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
            VALUES ("${answs.empFirst}", "${answs.empLast}", "${answs.empRole}", "${answs.empManager}")`, function (err, results) {
                //console.log(results);
            });
            viewEmployee();
        })

}

function updateEmployee() {

    db.query(`SELECT * FROM employee`, function (err, results) {
        console.table(results)
    })

    inquirer
        .prompt([
            {
                type: "input",
                name: "empID",
                message: "Please enter the employee by ID number that you wish to update:"
            },
            {
                type: "list",
                name: "roleUpdate",
                message: "Please select the role ID number this Employee will be updated to (View Table [1, 4, 7, 10, 13 are Supervisor Positions]):",
                choices: ["1", "2", "3", "4", "5", "6",
                    "7", "8", "9", "10", "11", "12", "13", "14", "15"]
            },
            {
                type: "list",
                name: "managerUpdate",
                message: "Based on the role, enter a corresponding Manager-ID (Main WH Supe's M-ID: 2, ASRS Supe's M-ID: 5, GES Supe's M-ID: 1, MEW Supe's M-ID: 4, Production Supe's M-ID: 3 [If you are a Manager, select null]):",
                choices: ["2", "5", "1", "4", "3", "null"]
            }
        ]
        )
        .then((answs) => {
            console.log(answs.empID, answs.roleUpdate, answs.managerUpdate)

            db.query(`UPDATE employee 
            SET role_id  = ${answs.roleUpdate}, manager_id = ${answs.managerUpdate}
            WHERE id = ${answs.empID}`, function (err, results) {
                //console.log(results);
            });
            viewEmployee();
        })

}