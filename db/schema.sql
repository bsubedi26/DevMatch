CREATE DATABASE profiles_db;

USE profiles_db;

CREATE TABLE users(
	id int NOT NULL AUTO_INCREMENT,
	first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE users ADD address varchar(255) NOT NULL;
ALTER TABLE users ADD phone_number varchar(255) NOT NULL;	
ALTER TABLE users ADD linkedin varchar(255) NOT NULL;   
ALTER TABLE users ADD github varchar(255) NOT NULL;
ALTER TABLE users ADD email varchar(255) NOT NULL;



CREATE TABLE skills(
    score int NOT NULL,
    personality_type varchar(255) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES users(id),
);

