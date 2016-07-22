CREATE DATABASE profiles_db;

USE profiles_db;

CREATE TABLE skills(
    id int NOT NULL AUTO_INCREMENT,
    first_name varchar(255),
    last_name varchar(255),
    email varchar(255),
    address varchar(255),
    phone_number varchar(255),
    linkedin varchar(255),
    github varchar(255),
    CSS varchar(255),
    HTML varchar(255),
    Ruby_Rails varchar(255),
    Java varchar (255),
    Javascript varchar (255),
    MySQL varchar (255),
    React varchar (255),
    PHP varchar (255),
    Groovy_Grails varchar (255),
    C_plus_plus varchar (255),
    others varchar (255),
    PRIMARY KEY (id)
);

CREATE TABLE scores(
    id int NOT NULL AUTO_INCREMENT,
    personality_type varchar(255),
    PRIMARY KEY (id)
);