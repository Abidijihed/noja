DROP DATABASE IF EXISTS noja;
CREATE DATABASE IF NOT EXISTS noja;
USE noja;

CREATE TABLE IF NOT EXISTS students(
id INT NOT NULL AUTO_INCREMENT,
FirstName VARCHAR(200),
LastName VARCHAR (200),
Email VARCHAR(200) ,
Address VARCHAR(255),
PhoneNumber VARCHAR(255),
Skills VARCHAR (200),
Password VARCHAR (200),
image VARCHAR(255),
country VARCHAR(200),
Zip VARCHAR(250),
creatAt VARCHAR(200),
originpassword varchar(255),
PRIMARY KEY (ID)
);
CREATE TABLE admin(
    id int NOT NULL AUTO_INCREMENT,
    students_id int NOT NULL,
    message VARCHAR(250) NOT NULL,
    date VARCHAR(250) NOT NULL,
    new BOOLEAN NOT NULL, 
   PRIMARY KEY (id),
    FOREIGN KEY (students_id) References students(id)
);
CREATE TABLE sessions(
    id int NOT NULL AUTO_INCREMENT,
    students_id int NOT NULL ,
    session varchar(250) NOT NULL,
    date varchar(250) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (students_id) References students(id)
);