USE hotel;
SELECT * FROM Customers;
SELECT * FROM Reservations;

SELECT * FROM Customers AS c
WHERE EXISTS (
	SELECT * FROM Reservations
    WHERE Reservations.CustomerId = c.CustomerId
);

SELECT * FROM Customers AS c
WHERE NOT EXISTS (
	SELECT * FROM Reservations
    WHERE Reservations.CustomerId = c.CustomerId
);


USE praticando;
SELECT * FROM manufacturers;
SELECT * FROM products;

SELECT `Name` FROM manufacturers AS m
WHERE NOT EXISTS (
	SELECT * FROM products
    WHERE products.Manufacturer = m.code
);

SELECT `Name` FROM manufacturers AS m
WHERE EXISTS (
	SELECT * FROM products
    WHERE products.Manufacturer = m.code
);


USE hotel;
-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.
SELECT * FROM Books_Lent;
SELECT * FROM Books;

SELECT Id, Title FROM Books AS B
WHERE NOT EXISTS(
	SELECT * FROM Books_Lent AS BL
    WHERE BL.book_id = B.Id
);


-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.
SELECT Id, Title FROM Books AS B
WHERE EXISTS(
	SELECT * FROM Books_Lent AS BL
    WHERE BL.book_id = B.Id
    AND rental_return_date IS NULL
) AND Title LIKE '%lost%';



-- Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.
SELECT * FROM CarSales;
SELECT * FROM Customers;

SELECT `Name` FROM Customers AS cus
WHERE NOT EXISTS(
	SELECT * FROM CarSales AS car
    WHERE cus.CustomerId = car.CustomerId
);



-- Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , exiba o nome do cliente e o modelo do carro de todos os clientes 
-- que fizeram compras de carros.
SELECT * FROM CarSales;
SELECT * FROM Customers;
SELECT * FROM Cars;

SELECT cus.`Name`, ca.Name FROM Customers AS cus
INNER JOIN Cars AS ca
WHERE EXISTS (
	SELECT * FROM CarSales AS cs
    WHERE cs.CustomerId = cus.CustomerID
    AND ca.Id = cs.CarID
);

SELECT 
    cus.name, car.name
FROM
    hotel.Cars AS car
        INNER JOIN
    hotel.Customers AS cus
WHERE
    EXISTS( SELECT 
            *
        FROM
            hotel.CarSales
        WHERE
            CustomerID = cus.CustomerId
                AND carID = car.ID);
