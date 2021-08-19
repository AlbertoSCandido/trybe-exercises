USE sakila;
SELECT CONCAT (first_name, last_name) FROM actor;
SELECT CONCAT(first_name, ' ', last_name) FROM actor;
SELECT CONCAT(first_name, ' ', last_name) AS 'Nome Completo' FROM actor;

SELECT * FROM film;
SELECT CONCAT(title,' ', release_year) AS 'Lançamento do Filme' FROM film;
SELECT CONCAT(title, ' ', rating) AS Classificacao FROM film;
SELECT * FROM address;
SELECT CONCAT(address, ' ', district) AS 'Endereco' FROM address;