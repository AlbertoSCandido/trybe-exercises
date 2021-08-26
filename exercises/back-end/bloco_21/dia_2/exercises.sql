USE Pixar;
SELECT * FROM BoxOffice;
SELECT * FROM Movies;
SELECT * FROM Theater;

-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.
SELECT m.title, b.domestic_sales, b.international_sales FROM BoxOffice AS b
	INNER JOIN
Movies AS m
WHERE m.id = b.movie_id;

SELECT 
    m.title, b.domestic_sales, b.international_sales
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id;


-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais 
-- ( international_sales ) do que vendas nacionais ( domestic_sales ).
SELECT m.title, b.domestic_sales, b.international_sales FROM BoxOffice AS b
	INNER JOIN
Movies AS m
WHERE m.id = b.movie_id
AND b.domestic_sales < b.international_sales;

SELECT 
    m.title, b.domestic_sales, b.international_sales
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id
WHERE
    b.international_sales > b.domestic_sales;

-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
SELECT 
    m.title, b.rating
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id
ORDER BY b.rating DESC;


-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, 
-- adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT * FROM Theater;
SELECT t.*, m.* FROM Theater t
	LEFT JOIN
Movies m
	ON t.id = m.id
ORDER BY t.`name`;


-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, 
-- adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT * FROM Theater;
SELECT t.*, m.* FROM Theater t
	RIGHT JOIN
Movies m
	ON t.id = m.id
ORDER BY t.`name`;


-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
SELECT * FROM BoxOffice;
SELECT * FROM Movies;
SELECT m.title FROM Movies m
	INNER JOIN
BoxOffice b
ON b.movie_id = m.id
WHERE b.rating > 7.5;

SELECT title FROM Movies m
	WHERE id IN (
SELECT movie_id FROM BoxOffice b
WHERE b.movie_id = m.id AND b.rating > 7.5
);


-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.
SELECT rating FROM BoxOffice
	INNER JOIN Movies
    ON movie_id = id
WHERE year > 2009;

SELECT rating FROM BoxOffice
WHERE movie_id IN (
	SELECT id FROM Movies
    WHERE year > 2009
);


-- Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.
SELECT * FROM Theater;
SELECT name, location from Theater T
WHERE EXISTS (
	SELECT * FROM Movies M
    WHERE M.theater_id = T.id
);


-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
SELECT * FROM Theater;
SELECT T.`name`, T.location from Theater T
WHERE NOT EXISTS (
	SELECT * FROM Movies M
    WHERE M.theater_id = T.id
);
