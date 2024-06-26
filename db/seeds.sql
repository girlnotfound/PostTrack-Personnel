INSERT INTO department (name) VALUES ('Management'), ('Culinary'), ('Food Coordination'), ('Dining Service'), ('Beverage');

INSERT INTO role (title, salary, department_id) VALUES ('Bartender', 22000, 1), ('Chef', 55000, 2), ('Expeditor', 25000, 3), ('Server', 20000, 4), ('Supervisor', 60000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Olivia', 'Benson', 5, 7), 
('Elliot', 'Stabler', 2, 7), 
('John', 'Munch', 3, 2), 
('Brian', 'Cassidy ', 4, 5),  
('Fin', 'Tutuola', 5, 7),  
('Alexandra', 'Cabot', 5, 7),
('Donald', 'Cragen', 5, NULL),  -- Donald Cragen is the top-level employee 
('Melinda', 'Warner', 1, 6), 
('George', 'Huang', 4, 1); 