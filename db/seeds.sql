INSERT INTO department (name) VALUES ('Management'), ('Culinary'), ('Food Coordination'), ('Dining Service'), ('Beverage') ON CONFLICT (name) DO NOTHING;

INSERT INTO role (title, salary, department_id) VALUES ('Supervisor', 6000, 1), ('Chef', 55000, 2), ('Expeditor', 25000, 3), ('Server', 20000, 4), ('Bartender', 22000, 5) ON CONFLICT (title) DO NOTHING;

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Olivia', 'Benson', 5, 1), -- all employees report to to 'Donald Cragen'
('Elliot', 'Stabler', 5, 1), 
('John', 'Munch', 4, 1), 
('Donald', 'Cragen', 1, NULL),  -- Donald Cragen is the top-level employee
('Brian', 'Cassidy ', 4, 1), 
('Fin', 'Tutuola', 3, 1), 
('Alexandra', 'Cabot', 2, 1), 
('Melinda', 'Warner', 4, 1), 
('George', 'Huang', 3, 1), 
('Rafael', 'Barba', 2, 1) ON CONFLICT (first_name, last_name) DO NOTHING;