CREATE DATABASE IF NOT EXISTS eco_troca_facil;
USE eco_troca_facil;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    estado VARCHAR(100) NOT NULL,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS objetos (
    id_objeto INT AUTO_INCREMENT PRIMARY KEY,
    nome_usuario VARCHAR(100) NOT NULL,
    tipo_acao ENUM('trocar', 'doar') NOT NULL,
    item_oferecido VARCHAR(100) NOT NULL,
    usuario_parceiro VARCHAR(100),
    item_parceiro VARCHAR(100),
    categoria_doacao VARCHAR(50),
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);