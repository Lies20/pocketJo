-- Création de la base de données
CREATE DATABASE dataJO;

-- Utilisation de la base de données
USE dataJO;

-- Création de la table "sport"
CREATE TABLE sport (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(30) NOT NULL
);

-- Création de la table "épreuve"
CREATE TABLE epreuve (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(40) NOT NULL,
  sport_id INT NOT NULL,
  FOREIGN KEY (sport_id) REFERENCES sport(id)
);

-- Création de la table "athlète"
CREATE TABLE athlete (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(50) NOT NULL,
  titre VARCHAR(60) NOT NULL,
  FOREIGN KEY (sport_id) REFERENCES sport(id)
);
