USE sakila;
-- Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor .
SELECT * FROM actor;
SELECT * FROM film_actor;

SELECT a.actor_id, CONCAT(a.first_name,' ', a.last_name) nome, f.film_id
FROM actor a
INNER JOIN film_actor f
on a.actor_id = f.actor_id;



-- Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address .
SELECT * FROM staff;
SELECT * FROM address;
SELECT first_name, last_name, address
FROM staff S
INNER JOIN address A
ON S.address_id = A.address_id;


-- Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, 
-- juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address .
SELECT * FROM address;
SELECT * FROM customer;
SELECT C.customer_id, C.first_name, C.email, C.address_id, A.address
FROM customer C
INNER JOIN address A
ON C.address_id = A.address_id
ORDER BY C.first_name DESC
LIMIT 100;



-- Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. 
-- As informações podem ser encontradas nas tabelas address e customer .
SELECT * FROM address;
SELECT * FROM customer;
SELECT 
	C.first_name, C.email, C.address_id, A.address, A.district
FROM 
	customer C
		INNER JOIN 
	address A
ON C.address_id = A.address_id
WHERE 
	A.district = 'California'
		AND C.first_name LIKE '%rene%';

-- Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. 
-- Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer .
SELECT * FROM address;
SELECT * FROM customer;
SELECT 
	C.first_name, COUNT(A.address) quantidade
FROM 
	customer C
		INNER JOIN
	address A
ON C.address_id = A.address_id
WHERE C.active = 1
GROUP BY C.first_name
ORDER BY C.first_name DESC;


-- Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) paga aos funcionários no ano de 2006. 
-- Use as tabelas payment e staff . Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT * FROM payment;
SELECT * FROM staff;
SELECT S.first_name, S.last_name, AVG(P.amount)
FROM
	staff S
		INNER JOIN
	payment P 
ON S.staff_id = P.staff_id
WHERE YEAR(P.payment_date) = 2006
GROUP BY S.first_name, S.last_name;



-- Monte uma query que exiba o id do ator , nome , id do filme e título do filme , usando as tabelas actor , film_actor e film . 
-- Dica: você precisará fazer mais de um JOIN na mesma query .
SELECT * FROM actor;
SELECT * FROM film_actor;
SELECT * FROM film;

SELECT A.actor_id, A.first_name, FA.film_id, F.title
FROM 
	actor A
		INNER JOIN
    film_actor FA ON A.actor_id = FA.actor_id
		INNER JOIN
	film F ON F.film_id = FA.film_id;

