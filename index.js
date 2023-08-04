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

// inquirer
//     .prompt({
//         type: "list",
//         name: "mainOption",
//         message: "What would you like to do? (Use arrow keys to scroll)",
//         choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update Employee Role", "Exit"]
//     })
//     .then((answers) => {
//         switch (answers){
//             case "View All Departments":
//                 db.query(`SELECT * FROM departments`)
//         }
//     })