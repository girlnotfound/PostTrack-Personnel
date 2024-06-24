require('dotenv').config(); // load environment variables from .env file

const { Pool } = require('pg'); // import the PostgreSQL pool

// create a new pool instance with connection details
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

// function to view all departments
const viewDepartments = async () => {
  try {
    const res = await pool.query('SELECT * FROM department'); // run query to get all departments
    return res.rows; // return results
  } catch (err) {
    console.error('Error executing query', err.stack); // log errors
  }
};

// function to view all roles
const viewRoles = async () => {
  try {
    const res = await pool.query('SELECT r.id, r.title, r.salary, d.name AS department FROM role r JOIN department d ON r.department_id = d.id'); // run query to get all roles
    return res.rows; 
  } catch (err) {
    console.error('Error executing query', err.stack);
  }
};

// function to view all employees
const viewEmployees = async () => {
  try {
    const res = await pool.query(`SELECT e.id, e.first_name, e.last_name, r.title, r.salary, d.name AS department,
    e.manager_id, m.first_name || ' ' || m.last_name AS manager
    FROM employee e
    LEFT JOIN employee m ON e.manager_id = m.id
    JOIN role r ON e.role_id = r.id
    JOIN department d ON r.department_id = d.id`); // run query to get all employees with their roles, departments, and managers
    return res.rows; // return results
  } catch (err) {
    console.error('Error executing query', err.stack); // log errors
  }
};

// function to view all managers
const viewManagers = async () => {
  try {
    const res = await pool.query(`SELECT DISTINCT m.first_name || ' ' || m.last_name AS manager
    FROM employee e
    LEFT JOIN employee m ON e.manager_id = m.id`); // run query to get all distinct managers
    return res.rows; 
  } catch (err) {
    console.error('Error executing query', err.stack); 
  }
};