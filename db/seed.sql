INSERT INTO departments (dept_name)
VALUES 
("Main Warehouse"),
("ASRS"),
("GES"),
("MEW"),
("Production");
       
INSERT INTO role (title, salary, department_id)
VALUES 
("Main WH Supervisor", 75000, 1), 
("Main WH Lead", 60000, 1), 
("Main WH Worker", 40000, 1),

("ASRS Supervisor", 80000, 2),
("ASRS Lead", 65000, 2), 
("ASRS Worker", 50000, 2),

("GES Supervisor", 100000, 3),
("GES Lead", 80000, 3), 
("GES Worker", 55000, 3),

("MEW Supervisor", 110000, 4),
("MEW Lead", 90000, 4), 
("MEW Worker", 60000, 4),

("Production Supervisor", 90000, 5),
("Production Lead", 70000, 5), 
("Production Worker", 40000, 5);
       
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 

("Char", "H", 7, null),
("Ryan", "N", 1, null),
("Nick", "R", 13, null),
("Jorge", "G", 10, null),
("David", "E", 4, null),


("Maria", "S", 14, 3),
("Andy", "N", 8, 1),
("Sean", "C", 11, 4),
("Leo", "D", 5, 5),
("Mark", "M", 2, 2),
("Jordan", "T", 8, 1),
("Donavon", "T", 14, 3),
("Elena", "P", 14, 3),


("Adrian", "Frausto", 9, 1),
("Dominick", "R", 9, 1),
("Tomas", "B", 9, 1),
("Lenny", "S", 9, 1),

("Raul", "A", 9, 1),
("Juan", "C", 9, 1),
("Jon", "Z", 9, 1),
("Johnny", "Y", 9, 1),

("Steve", "L", 9, 1),
("Emily", "C", 9, 1),
("Chris", "B", 9, 1),
("Brandon", "F", 9, 1),

("Kehlani", "T", 9, 1),
("Marco", "R", 9, 1),
("Wayne", "G", 9, 1),
("Jason", "S", 9, 1),



("Saul", "L", 12, 5),
("Mickey", "R", 6, 4),
("Luis", "F", 15, 3),
("Gabriel", "G", 3, 2),

("Carlos", "S", 3, 2),
("Chris", "I", 12, 5),
("Michael", "W", 15, 3),
("Dontay", "K", 6, 4);

