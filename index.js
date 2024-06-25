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
