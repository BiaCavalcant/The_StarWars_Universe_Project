create database thestarwarsuniverse;

use thestarwarsuniverse;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

create table quizz(
	idQuizz int primary key auto_increment,
    nome varchar(45),
    dt_criacao date
);

create table erros_acertos(
	idEA int auto_increment,
    erros int,
    acertos int, 
    data_hora datetime,
    fkUsuario int, constraint fkUsuario foreign key(fkUsuario) references usuario(idUsuario),
    fkQuizz int, constraint fkQuizz foreign key(fkQuizz) references quizz(idQuizz),
		constraint pkComposta primary key(idEA, fkUsuario, fkQuizz)
);