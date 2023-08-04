INSERT INTO department (dept_name)
VALUES 
("Main Warehouse"),
("ASRS"),
("GES"),
("MEW"),
("Production");
       
INSERT INTO position (title, salary, department_id)
VALUES 
("Main WH Supervisor", 75000, 1), 
("Main WH Lead", 60000, 1), --2
("Main WH Worker", 40000, 1),

("ASRS Supervisor", 80000, 2),
("ASRS Lead", 65000, 2), --5
("ASRS Worker", 50000, 2),

("GES Supervisor", 100000, 3),
("GES Lead", 80000, 3), --8
("GES Worker", 55000, 3),

("MEW Supervisor", 110000, 4),
("MEW Lead", 90000, 4), --11
("MEW Worker", 60000, 4),

("Production Supervisor", 90000, 5),
("Production Lead", 70000, 5), --14
("Production Worker", 40000, 5);
       
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
-- GES workers
("Adrian", "Frausto", 9, 7),
("Dominick", "R", 9, 7),
("Tomas", "B", 9, 7),
("Lenny", "S", 9, 7),

("Raul", "A", 9, 7),
("Juan", "C", 9, 7),
("Jon", "Z", 9, 7),
("Johnny", "Y", 9, 7),

-- Other workers

("Saul", "L", 12, 10),
("Mickey", "R", 6, 4),
("Luis", "F", 15, 13),
("Gabriel", "G", 3, 1),

("Carlos", "S", 3, 1),
("Chris", "I", 12, 10),
("Michael", "W", 15, 13),
("Dontay", "K", 6, 4),

-- leads
("Maria", "S", 14, 13),
("Andy", "N", 8, 7),
("Sean", "C", 11, 10),
("Leo", "D", 5, 4),
("Mark", "M", 2, 1)

-- Supes
("Char", "H", 7, null),
("Ryan", "N", 1, null),
("Nick", "R", 13, null),
("Jorge", "G", 10, null),
("David", "E", 4, null)