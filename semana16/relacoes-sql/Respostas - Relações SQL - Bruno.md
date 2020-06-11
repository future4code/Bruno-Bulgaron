# Exercício 1

a) Utilizamos uma Chave Estrangeira em tabelas que utilizam relações.
b)
```
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"001",
    "Filme excelente!",
    10,
	"004"
);
```
c) 
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`hamilton_bruno_bulgaron`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```
d)
```
ALTER TABLE Movie DROP COLUMN rating;
```
e)
```
DELETE FROM Movie WHERE id = "002";
```

# Exercício 2

a) Cria a tabela MovieCast com as colunas movie_id e actor_id, com foreign key movie_id referenciando id de Movie.
b) 
```
INSERT INTO MovieCast (movie_id, actor_id)
VALUES (
	"001",
    "001"
);
```
c) 
d) 

# Exercício 3

a) O operador **on** indica com qual coluna ele está se relacionando.
b)
```
SELECT Movie.id, Movie.name, Rating.rate FROM Movie INNER JOIN Rating ON Movie.id = Rating.movie_id;
```
