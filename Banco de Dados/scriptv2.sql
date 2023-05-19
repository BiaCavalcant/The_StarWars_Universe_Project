CREATE DATABASE thestarwarsuniverse;

USE thestarwarsuniverse;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE quizz(
	idQuizz INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    tipo VARCHAR(45), 
		CONSTRAINT chkTipo CHECK (tipo IN ('Conhecimentos','Personalidade')),
    dt_criacao DATE
);

CREATE TABLE resolucao_quizz(
	idResolucao INT AUTO_INCREMENT,
    erros INT, /*se for teste de conhecimentos usa o erros e acertos e a personalidade vai nula*/
    acertos INT,
    personalidade VARCHAR(45), /*se for teste de personalidade usa o personalidade e o erros e acertos vai nulo*/
		CONSTRAINT chkPersonalidade CHECK (personalidade IN ('Jedi','Sith')),
    data_hora DATETIME DEFAULT current_timestamp,
    fkUsuario INT, CONSTRAINT fkUsuario FOREIGN KEY(fkUsuario) REFERENCES usuario(idUsuario),
    fkQuizz INT, CONSTRAINT fkQuizz FOREIGN KEY(fkQuizz) REFERENCES quizz(idQuizz),
		CONSTRAINT pkComposta PRIMARY KEY(idResolucao, fkUsuario, fkQuizz)
);

INSERT INTO quizz values
(null, "Teste seus conhecimentos em Star Wars", "Conhecimentos", "2023-05-05"),
(null, "Descubra o seu lado da força", "Personalidade", "2023-05-15");

