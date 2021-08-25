-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;


-- Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos.
SELECT * FROM sakila.customer;
SELECT active, COUNT(*) FROM sakila.customer GROUP BY active;

-- Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja. 
-- Os resultados devem conter o ID da loja , o status dos clientes (ativos ou inativos) e a quantidade de clientes por statu
SELECT store_id, active, COUNT(active) FROM sakila.customer
GROUP BY store_id, active;

-- Monte uma query que exiba a média de duração de locação por classificação indicativa ( rating ) dos filmes cadastrados na tabela sakila.film .
-- Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.
SELECT rating, AVG(rental_duration) AS 'MÉDIA' FROM sakila.film
GROUP BY rating
ORDER BY MÉDIA DESC;

-- Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele.
-- Os resultados devem ser ordenados da maior quantidade para a menor.
SELECT district, COUNT(address) AS quantidade FROM sakila.address
GROUP BY district
ORDER BY quantidade DESC;

-- Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length) ,
-- de forma que deixe a query mais legível.
-- Finalize ordenando os resultados de forma decrescente.
SELECT rating, AVG(length) AS duracao_media
FROM sakila.film
GROUP BY rating
HAVING duracao_media >= 115 AND duracao_media <= 121.5
ORDER BY duracao_media DESC;

-- Usando a query a seguir, exiba apenas os valores de custo de substituição que estão acima de $3950.50. 
-- Dê um alias que faça sentido para SUM(replacement_cost) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.
SELECT rating, SUM(replacement_cost) AS custo_total
FROM sakila.film
GROUP by rating
HAVING custo_total > 3950.5
ORDER BY custo_total;


