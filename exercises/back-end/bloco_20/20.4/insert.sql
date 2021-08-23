USE sakila;

SELECT * FROM staff;

-- Insira um novo funcionário na tabela sakila.staff .
INSERT INTO staff (first_name, last_name, email, username, password, address_id, store_id, active)
VALUES ('alberto', 'candido', 'alberto@teste.com', 'albertsc', 'senha123', 2, 1, 1);


-- Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query .
INSERT INTO staff (first_name, last_name, email, username, password, address_id, store_id, active)
VALUES 
	('vini', 'gouveia', 'vini@teste.com', 'vinig', 'senha123', 5, 1, 1),
	('matheus', 'alexandre', 'matheus@teste.com', 'matheusA', 'senha123', 6, 1, 1);


-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor .
SELECT * FROM actor;
INSERT INTO sakila.actor (first_name, last_name)
	SELECT first_name, last_name FROM sakila.customer
    ORDER BY customer_id
    LIMIT 5;


-- Cadastre três categorias de uma vez só na tabela sakila.category .
SELECT * FROM category;
INSERT INTO sakila.category (name)
VALUES
	('anotherCategory1'),
    ('anotherCategory2'),
    ('anotherCategory3');
    
-- Cadastre uma nova loja na tabela sakila.store .
SELECT * FROM store;
INSERT INTO sakila.store (manager_staff_id, address_id)
	VALUE (3, 3);
