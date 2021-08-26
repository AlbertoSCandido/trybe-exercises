USE Pixar;
SELECT * FROM Theater;
SELECT * FROM BoxOffice;
SELECT * FROM Movies;
-- Exercício 10: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8 e que estejam em cartaz.
SELECT m.* FROM Movies m
	INNER JOIN
BoxOffice b
	ON
m.id = b.movie_id
    INNER JOIN
Theater t
	ON t.id = m.theater_id
WHERE b.rating > 8;

USE Pixar;

SELECT 
    m.id,
    m.title,
    m.director,
    m.year,
    m.length_minutes,
    m.theater_id
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id
WHERE
    b.rating > 8
        AND m.theater_id IS NOT NULL;

-- Exercício 11: Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo diretor.
SELECT * FROM Movies;
SELECT t1.title, t1.length_minutes, t2.title, t2.length_minutes FROM Movies t1
INNER JOIN Movies t2
ON t1.director = t2.director
AND t1.title <> t2.title;

SELECT 
    t1.title, t1.length_minutes, t2.title, t2.length_minutes
FROM
    Movies t1,
    Movies t2
WHERE
    t1.director = t2.director
        AND t1.title <> t2.title;
        
-- Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem o título dos filmes que 
-- arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.
SELECT title FROM Movies m
INNER JOIN BoxOffice b
ON b.movie_id = m.id
AND b.international_sales > 500000000
AND m.length_minutes > 110;

SELECT title FROM Movies m
WHERE m.id IN (
SELECT movie_id FROM BoxOffice
WHERE movie_id = m.id
AND international_sales > 500000000)
AND m.length_minutes > 110;
