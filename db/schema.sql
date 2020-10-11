### Schema
DROP DATABASE IF EXISTS  `e2aalmyf1v7ybg8w`;
use `e2aalmyf1v7ybg8w`;
CREATE DATABASE `e2aalmyf1v7ybg8w`;
create table gesas(
id int NOT NULL AUTO_INCREMENT,
name VARCHAR(255),
eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
SELECT * FROM gesas;
 INSERT INTO gesas(name) VALUES("wilmergesa");

 