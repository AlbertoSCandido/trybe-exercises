USE sakila;
DELIMITER $$

CREATE FUNCTION MoviesWithActor(actor_id int)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE movie_total INT;
    SELECT COUNT(*)
    FROM sakila.film_actor
    WHERE sakila.film_actor.actor_id = actor_id INTO movie_total;
    RETURN movie_total;
END $$

DELIMITER ;

-- Como usar:

SELECT MoviesWithActor(1);

-- Exemplo: Uma stored function que exibe o nome completo de um ator ou de uma atriz, dado seu id como parâmetro:
USE sakila;
DELIMITER $$

CREATE FUNCTION GetFullName(id INT)
RETURNS VARCHAR(200) READS SQL DATA
BEGIN
    DECLARE full_name VARCHAR(200);
    SELECT concat(first_name, ' ', last_name)
    FROM sakila.actor
    WHERE actor_id = id
    LIMIT 1
    INTO full_name ;
    RETURN full_name;
END $$

DELIMITER ;

SELECT GetFullName(51);


-- Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos até 
-- o momento por um determinado customer_id .

SELECT * FROM payment;

USE sakila;
DELIMITER $$

CREATE FUNCTION GetTotalPayments(id INT)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE total INT;
    SELECT COUNT(*) FROM payment
    WHERE customer_id = id
    INTO total;
    RETURN total;
END $$

DELIMITER ;

SELECT GetTotalPayments(10);


-- Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id.
USE sakila;
DELIMITER $$

CREATE FUNCTION GetCorrespondingFilm(id INT)
RETURNS VARCHAR(300) READS SQL DATA
BEGIN
    DECLARE movie_title VARCHAR(500);
    SELECT f.title FROM film f
    INNER JOIN inventory i
    ON f.film_id = i.film_id
    WHERE i.inventory_id = id
    INTO movie_title;
    RETURN movie_title;
END $$

DELIMITER ;

SELECT GetCorrespondingFilm(2);

-- Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.
SELECT * FROM film_category;
SELECT * FROM category;
SELECT COUNT(*) FROM film_category fc
INNER JOIN category c
ON fc.category_id = c. category_id
WHERE c.name = 'Action';

USE sakila;
DELIMITER $$

CREATE FUNCTION GetMovieAmountInCategory(category VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
    DECLARE movie_amount INT;
    SELECT COUNT(*) FROM film_category fc
	INNER JOIN category c
	ON fc.category_id = c. category_id
	WHERE c.name = category
    INTO movie_amount;
    RETURN movie_amount;
END $$

DELIMITER ;

SELECT GetMovieAmountInCategory('Action');