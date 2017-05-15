CREATE DATABASE basic_tasks_db;
USE basic_tasks_db;

CREATE TABLE tasks
(
id int NOT NULL AUTO_INCREMENT,
task varchar(255) NOT NULL,
completed BOOLEAN,
today TIMESTAMP,
PRIMARY KEY (id)
);