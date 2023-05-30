-- Création de la base de données
DROP DATABASE IF EXISTS dataJO;
CREATE DATABASE dataJO;

-- Utilisation de la base de données
-- USE dataJO;

-- Création de la table "sport"
CREATE TABLE dataJO.sport (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(30) NOT NULL
);

-- Création de la table "épreuve"
CREATE TABLE dataJO.epreuve (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(40) NOT NULL,
  sport_id INT UNSIGNED,
  FOREIGN KEY (sport_id) REFERENCES sport(id)
);

-- Création de la table "athlète"
CREATE TABLE dataJO.athlete (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(50) NOT NULL,
  titre VARCHAR(60) NOT NULL
);

CREATE TABLE dataJO.medaille (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	nom VARCHAR(20)
);

CREATE TABLE dataJO.titre (
  athlete_id INT UNSIGNED,
  epreuve_id INT UNSIGNED,
  medaille_id INT UNSIGNED,
  PRIMARY KEY (athlete_id, epreuve_id, medaille_id),
  FOREIGN KEY (athlete_id) REFERENCES athlete(id),
  FOREIGN KEY (epreuve_id) REFERENCES epreuve(id),
  FOREIGN KEY (medaille_id) REFERENCES medaille(id)
);

