require('dotenv').config(); // load environment variables

const inquirer = require('inquirer'); // import inquirer for prompts

// import functions for database queries
const {
  viewDepartments,
  viewRoles,
  viewEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
} = require('./query');

// main menu function
const mainMenu = async () => {
  const answer = await inquirer.prompt({
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      'View all departments',
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update an employee role',
      'Exit'
    ],
  });
  switch (answer.action) {
    case 'View all departments':
      const departments = await viewDepartments();
      console.table(departments);
      break;
    case 'View all roles':
      const roles = await viewRoles();
      console.table(roles);
      break;
    case 'View all employees':
      const employees = await viewEmployees();
      console.table(employees);
      break;
    case 'Add a department':
      await promptAddDepartment();
      break;
    case 'Add a role':
      await promptAddRole();
      break;
    case 'Add an employee':
      await promptAddEmployee();
      break;
    case 'Update an employee role':
      await promptUpdateEmployeeRole();
      break;
    case 'Exit':
      process.exit();
  }
  mainMenu(); // loop back to main menu after an action is completed
};