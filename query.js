const { Client } = require('pg'); // import the PostgreSQL client

// create a new client instance with connection details
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'employee_db',
  password: 'Elite5quad!',
  port: 5432,
});

client.connect(); // connect to the database
