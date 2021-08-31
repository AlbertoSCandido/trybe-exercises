CREATE DATABASE IF NOT EXISTS zoologico;

USE zoologico;

CREATE TABLE animal (
	animal_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    especie VARCHAR(100) NOT NULL,
    sexo VARCHAR(20) NOT NULL,
    idade INT NOT NULL,
    localizacao VARCHAR(200) NOT NULL
);

CREATE TABLE gerente (
	gerente_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE cuidador (
	cuidador_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    gerente_id INT NOT NULL,
	FOREIGN KEY (gerente_id) REFERENCES gerente (gerente_id)
);

CREATE TABLE cuidador_animal (
	animal_id INTEGER,
	cuidador_id INTEGER,
    CONSTRAINT PRIMARY KEY(animal_id, cuidador_id),
    FOREIGN KEY (animal_id) REFERENCES animal (animal_id),
    FOREIGN KEY (cuidador_id) REFERENCES cuidador (cuidador_id)
);
