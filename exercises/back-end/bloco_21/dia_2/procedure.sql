USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAverageRentalDurationOfMovie(
    IN film_name VARCHAR(300),
    OUT media_aluguel_em_dias DOUBLE
)
BEGIN
    SELECT AVG(rental_duration) INTO media_aluguel_em_dias
    FROM sakila.film
    WHERE title = film_name;
END $$

DELIMITER ;

-- Como usar:

CALL ShowAverageRentalDurationOfMovie('ACADEMY DINOSAUR', @media_de_dias);
SELECT @media_de_dias;

USE sakila;
DELIMITER $$

CREATE PROCEDURE NameGenerator(INOUT film_name VARCHAR(300))
BEGIN
    SELECT CONCAT('ULTRA ', film_name, ' THE BEST MOVIE OF THE CENTURY')
    INTO film_name;
END $$

DELIMITER ;

-- Como usar:

SELECT 'ACE GOLDFINGER' INTO @movie_title;
CALL NameGenerator(@movie_title);
SELECT @movie_title;


SELECT * FROM film_actor;
SELECT actor_id, COUNT(*) AS quantity FROM film_actor
GROUP BY actor_id
ORDER BY quantity DESC;
-- Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. 
-- Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.
USE sakila;

DELIMITER $$

CREATE PROCEDURE searchTenMorePopularActors()
BEGIN

SELECT actor_id, COUNT(*) AS quantity FROM film_actor
GROUP BY actor_id
ORDER BY quantity DESC
LIMIT 10;

END $$

DELIMITER ;

CALL searchTenMorePopularActors;


-- Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme , 
-- seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.
SELECT * FROM film;
SELECT * FROM film_category;
SELECT * FROM category;

SELECT f.title, c.category_id, c.name FROM film_category AS fc
INNER JOIN film AS f, category AS c
	WHERE fc.film_id = f.film_id
    AND fc.category_id = c.category_id
    AND c.name = 'Animation';

USE sakila;

DELIMITER $$

CREATE PROCEDURE FindMovieByCategory(IN in_category VARCHAR(100))
BEGIN
	SELECT f.title, c.category_id, c.name FROM film_category AS fc
	INNER JOIN film AS f, category AS c
	WHERE fc.film_id = f.film_id
    AND fc.category_id = c.category_id
    AND c.name = in_category;
END $$

DELIMITER ;

CALL FindMovieByCategory('Animation');


USE sakila;
DELIMITER $$

CREATE PROCEDURE FindMovieByCategory(IN category VARCHAR(100))
BEGIN
    SELECT f.film_id, f.title, fc.category_id, c.name
    FROM sakila.film f
    INNER JOIN sakila.film_category fc ON f.film_id = fc.film_id
    INNER JOIN sakila.category c ON c.category_id = fc.category_id
    WHERE c.name = category;
END $$

DELIMITER ;

-- Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.
SELECT * FROM customer;

USE sakila;
DELIMITER $$

CREATE PROCEDURE CheckIfActiveClient(INOUT client_email VARCHAR(150))
BEGIN
SET client_email = (
	SELECT active FROM customer
    WHERE email = client_email
);
END $$

DELIMITER ;

SET @client_email = 'MARY.SMITH@sakilacustomer.org';
CALL CheckIfActiveClient(@client_email);
SELECT @client_email;