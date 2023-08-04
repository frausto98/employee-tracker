DROP DATABASE IF EXISTS frito_db;

CREATE DATABASE frtio_db;

USE frito_db;

CREATE TABLE department (
    id: INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dept_name: VARCHAR(30) NOT NULL 
)

CREATE TABLE position (
    id: INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title: VARCHAR(30) NOT NULL ,
    salary: decimal,
    department_id: INT NOT NULL,
    FOREIGN KEY (department_id),
    REFERENCES department(id),
    ON DELETE SET NULL
)

CREATE TABLE employee (
    id: INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name: VARCHAR(30) NOT NULL ,
    last_name: VARCHAR(30) NOT NULL,
    role_id: INT NOT NULL,
    manager_id: INT NOT NULL,
    FOREIGN KEY (role_id, manager_id),
    REFERENCES department(id), position(id)
    ON DELETE SET NULL
)
