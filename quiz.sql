CREATE DATABASE quiz;

CREATE TABLE theme (
   `id_theme` int NOT NULL AUTO_INCREMENT,
   `label` TEXT,

   PRIMARY KEY(`id_theme`)
);

CREATE TABLE question(
   `id_question` int NOT NULL AUTO_INCREMENT,
   `content` TEXT,
   `id_theme` int,

   PRIMARY KEY(`question`),
   FOREIGN KEY(`id_theme`) REFERENCES theme(id_theme) 

);

CREATE TABLE answer(
    `id_answer` int NOT NULL AUTO_INCREMENT,
    `correct_answer` TEXT,
    `answers` JSON,
    `id_question` int,

    PRIMARY KEY(`id_answer`),
    FOREIGN KEY(`id_question`) REFERENCES question(id_question)
);

INSERT INTO theme(`label`) VALUES ('Installing Linux');