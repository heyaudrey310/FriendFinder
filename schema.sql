DROP DATABASE IF EXISTS friendfinderDB;
CREATE DATABASE friendfinderDB;
USE friendfinderDB;

CREATE TABLE questions(
    id int NOT NULL AUTO_INCREMENT,
    friend VARCHAR(100) NOT NULL,
     PRIMARY KEY(id)
);

