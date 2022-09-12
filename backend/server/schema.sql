DROP DATABASE IF EXISTS noja;
CREATE DATABASE IF NOT EXISTS noja;
USE noja;
CREATE TABLE IF NOT EXISTS admin(
id INT NOT NULL AUTO_INCREMENT,
Email VARCHAR (200) NOT NULL,
Password VARCHAR (200) NOT NULL,
PRIMARY KEY (ID)
);
CREATE TABLE IF NOT EXISTS students(
id INT NOT NULL AUTO_INCREMENT,
FirstName VARCHAR(200),
LastName VARCHAR (200),
creatAt datetime DEFAULT current_timestamp(),
Email VARCHAR(200) ,
Password VARCHAR (200),
confirmPassword VARCHAR (200),
PhoneNumber VARCHAR(255),
image VARCHAR(255),
country VARCHAR(200),
Zip VARCHAR(250),
Address VARCHAR(255),
PRIMARY KEY (ID)
);
CREATE TABLE sessions(
    id int NOT NULL AUTO_INCREMENT,
   students_id int NOT NULL ,
    session varchar(250) NOT NULL,
    date varchar(250) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (students_id) References students(id)
);