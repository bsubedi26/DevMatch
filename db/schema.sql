CREATE DATABASE profiles_db;

USE profiles_db;

CREATE TABLE users(
	id int NOT NULL AUTO_INCREMENT,
	first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE skills(
	CSS boolean not null,
    HTML boolean not null,
    Node.js boolean not null,
    Angular.js boolean not null,
    Ruby_on_Rails boolean not null,
    Java boolean not null,
    Javascript boolean not null,
	MySQL boolean not null,
    React boolean not null,
    PHP boolean not null,
    Python boolean not null,
    Groovy_on_Grails boolean not null,
    C boolean not null,
    C++ boolean not null
);

CREATE TABLE recruiter(
	
);
