CREATE DATABASE db_DTS;
USE db_DTS;

CREATE TABLE Produto(
    id_Produto INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nome_Produto VARCHAR(100) NOT NULL,
    desc_Produto VARCHAR(255) NOT NULL,
    img_Produto VARCHAR(255) NOT NULL,
    fab_Produto VARCHAR(20) NOT NULL,
    preco_Produto FLOAT NOT NULL,
    estoque_Produto INT NOT NULL,
    datacad_Produto DATE NOT NULL
);

CREATE TABLE Cliente(
    cpfcnpj_Cliente VARCHAR(14) PRIMARY KEY NOT NULL,
    nome_Cliente VARCHAR(100) NOT NULL,
    email_Cliente VARCHAR(255) NOT NULL,
    tel_Cliente VARCHAR(13),
    senha_Cliente VARCHAR(255) NOT NULL,
    end_Cliente VARCHAR(255) NOT NULL,
    rua_Cliente VARCHAR(255) NOT NULL,
    num_Cliente INT NOT NULL,
    comp_Cliente VARCHAR(255),
    cep_Cliente CHAR(8) NOT NULL
);

CREATE TABLE Vendedor(
    cpfcnpj_Vendedor VARCHAR(14) PRIMARY KEY NOT NULL,
    nome_Vendedor VARCHAR(100) NOT NULL,
    email_Vendedor VARCHAR(255) NOT NULL,
    tel_Vendedor VARCHAR(13),
    senha_Vendedor VARCHAR(255) NOT NULL,
    end_Vendedor VARCHAR(255) NOT NULL,
    rua_Vendedor VARCHAR(255) NOT NULL,
    num_Vendedor INT NOT NULL,
    comp_Vendedor VARCHAR(255),
    cep_Vendedor CHAR(8) NOT NULL,
    inest_Vendedor VARCHAR(14) NOT NULL
)

CREATE TABLE Venda(
    id_Venda INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    data_Venda DATE NOT NULL,
    dest_Venda VARCHAR(255) NOT NULL,
    remet_Venda VARCHAR(255) NOT NULL,
    cpfcnpj_Cliente_FK VARCHAR(14),
    nome_Cliente_FK VARCHAR(100),
    tel_Cliente_FK VARCHAR(13),
    cpfcnpj_Vendedor_FK VARCHAR(14),
    nome_Vendedor_FK VARCHAR(100),
    tel_Vendedor_FK VARCHAR(13),
    FOREIGN KEY (cpfcnpj_Cliente_FK) REFERENCES Cliente(cpfcnpj_Cliente),
    FOREIGN KEY (nome_Cliente_FK) REFERENCES Cliente(nome_Cliente),
    FOREIGN KEY (tel_Cliente_FK) REFERENCES Cliente(tel_Cliente),
    FOREIGN KEY (cpfcnpj_Vendedor_FK) REFERENCES Vendedor(cpfcnpj_Vendedor),
    FOREIGN KEY (nome_Vendedor_FK) REFERENCES Vendedor(nome_Vendedor),
    FOREIGN KEY (tel_Vendedor_FK) REFERENCES Vendedor(tel_Vendedor)
)

CREATE TABLE ItemVenda(
    id_ItemVenda INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    qtd_ItemVenda INT NOT NULL,
    id_Venda_FK INT,
    id_Produto_FK INT,
    nome_Produto_FK VARCHAR(100),
    preco_Produto_FK FLOAT,
    FOREIGN KEY (id_Venda_FK) REFERENCES Venda(id_Venda),
    FOREIGN KEY (id_Produto_FK) REFERENCES Produto(id_Produto),
    FOREIGN KEY (nome_Produto_FK) REFERENCES Produto(nome_Produto),
    FOREIGN KEY (preco_Produto_FK) REFERENCES Produto(preco_Produto)
)

CREATE TABLE Contato(
    id_Contato INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nome_Cliente_FK VARCHAR(100),
    email_Cliente_FK VARCHAR(255),
    assunto_Contato VARCHAR(100),
    mensagem_Contato VARCHAR(500),
    FOREIGN KEY (nome_Cliente_FK) REFERENCES Cliente(nome_Cliente),
    FOREIGN KEY (email_Cliente_FK) REFERENCES Cliente(email_Cliente)
)

