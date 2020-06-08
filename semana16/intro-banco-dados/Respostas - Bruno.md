# Exercício 1

a) **CREATE TABLE** cria uma nova tabela. **VARCHAR** é para strings de no máximo n caracteres. **PRIMARY KEY** é tipo a ID. **NOT NULL** não pode ficar vazio. **FLOAT** números não inteiros. **DATE** data.
b) **SHOW DATABASES** retorna os banco de dados conectados. **SHOW TABLES** retorna as colunas.
c) **DESCRIBE Actor** retorna todas as informações da tabela Actor sem os valores.
```
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
		gender VARCHAR(6) NOT NULL
);
```

# Exercício 2

b) Dá erro pois já existe um id 002.
```
Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
```
c) Dá erro pois a contagem de colunas não bate com o valor da primeira linha.
```
Error Code: 1136. Column count doesn't match value count at row 1
```
Correção:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
d) Dá erro pois não foi passado um nome na query, e não existe um valor padrão para name.
```
Error Code: 1364. Field 'name' doesn't have a default value
```
Correção:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Tom Cruise",
  400000,
  "1949-04-18", 
  "male"
);
```
e) Dá erro pois foi passada a data de forma incoreta.
```
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
```
Correção:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719000,
  "1979-03-26", 
  "female"
);
```

# Exercício 3

a)
```
SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "female";
```
b)
```
SELECT salary from Actor WHERE name = "Tony Ramos";
```
c) Não retornou nada pois não tem nenhum Actor com o gender invalid.
```
SELECT * from Actor WHERE gender = "invalid";
```
d)
```
SELECT id, name, salary from Actor WHERE salary <= 500000;
```
e) Não existe uma coluna chamada nome.
```
Error Code: 1054. Unknown column 'nome' in 'field list'
```
Correção:
```
SELECT id, name from Actor WHERE id = "002";
```
a- Não retornou erro.
b- Não retornou erro.
c- Não retornou nada.
d- Retornou todo mundo, aparentemente.
e- Retornou a Glória Pires.

# Exercício 4

a)
```
SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
```
Essa query **seleciona** todos os **atores** cujo **nome** começa com A ou J **e** tenham um **salário** menor que 300000.

b)
```
SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 35000000;
```
c)
```
SELECT * FROM Actor WHERE (name LIKE "G%" OR "g%");
```
d)
```
SELECT * FROM Actor WHERE (name LIKE "%a%" OR "%A%" OR "%g%" OR "%G%") AND salary BETWEEN 35000000 AND 90000000;
```

# Exercício 5

a) A query abaixo cria uma tabela Movie com as colunas id, name, synopsys, release_Date e rating.
```
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
	rating INT NOT NULL
);
```

# Exercício 6

a)
```
SELECT id, name, rating FROM Movie WHERE id = "001";
```
b)
```
SELECT * FROM Movie WHERE name = "O Palhaço";
```
c)
```
SELECT id, name, synopsis FROM Movie WHERE rating > 7;
```

# Exercício 7

a)
```
SELECT * FROM Movie WHERE name LIKE "%vida%";
```
b)
```
SELECT * FROM Movie WHERE name LIKE "%casamento%" OR synopsis LIKE "%casamento%";
```
c)
```
SELECT * FROM Movie WHERE release_Date <= "2020-06-08";
```
d)
```
SELECT * FROM MOVIE
WHERE release_date < "2020-06-08" AND 
      (name LIKE "%palhaço%" OR
      synopsis LIKE "%palhaço%") AND rating > 7;
```
