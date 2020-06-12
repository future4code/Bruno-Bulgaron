Respostas - Aprofundamento SQL - Bruno Bulgaron
# Exercício 1

a) Altera a table **Actors** e **remove** a coluna **salary**
```
ALTER TABLE Actors DROP COLUMN salary;
```
b) Altera a table **Actors** e **muda** a coluna gender para se chamar sex com número máximo de caracteres de 6.
```
ALTER TABLE Actors CHANGE gender sex VARCHAR(6);
```
c) Altera a table **Actors** e **muda** a coluna gender como sendo gender com número máximo de caracteres de 255.
```
ALTER TABLE Actors CHANGE gender gender VARCHAR(255);
```
d) Altera a table **Actor** e **muda** a coluna gender para gender com até 100 caracteres.
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

# Exercício 2

a)
```
UPDATE Actor SET name = "Ivete Sangalo", birth_date = "1970-01-01" WHERE id = "003";
```
b)
```
UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PÃES";
```
c)
```
UPDATE Actor SET name = "Juliana Paesss", salary = "500000", birth_date = "1979-03-25", gender = "female" WHERE id = "005";
```
d) Ele rodou, mas não fez nada.

# Exercício 3

a)
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```
b)
```
DELETE FROM Actor WHERE gender = "male" AND salary >= "1000000";
```

# Exercício 4

a)
```
SELECT MAX(salary) FROM Actor;
```
b)
```
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```
c)
```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```
d)
```
SELECT SUM(salary) FROM Actor;
```

# Exercício 5

a)
```
SELECT Count(*), gender FROM Actor GROUP BY gender;
```
b)
```
SELECT id, name from Actor ORDER BY name DESC;
```
c)
```
SELECT * from Actor ORDER BY salary;
```
d)
```
SELECT * from Actor ORDER BY salary DESC LIMIT 3;
```
e)
```
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
```

# Exercício 6

a)
```
ALTER TABLE Movie ADD playing_limit_date VARCHAR(255);
```
b)
```
ALTER TABLE Movie CHANGE rating rating FLOAT;
```
c)
```
UPDATE Movie SET playing_limit_date = "2020-08-01" WHERE id = "001";
UPDATE Movie SET playing_limit_date = "2020-02-01" WHERE id = "002";
```
d)
```
DELETE FROM Movie WHERE id = "003";
```

# Exercício 7

a)
```
SELECT Count(*) from Movie WHERE rating >= "7.5";
```
b)
```
SELECT AVG(rating) from Movie;
```
c)
```
SELECT Count(*) from Movie WHERE playing_limit_date > CURDATE();
```
d)
```
SELECT Count(*) from Movie WHERE release_Date < CURDATE();
```
e)
```
SELECT MAX(rating) from Movie;
```
f)
```
SELECT MIN(rating) from Movie;
```

# Exercício 8

a)
```
SELECT * from Movie ORDER BY name;
```
b)
```
SELECT * from Movie ORDER BY name LIMIT 5;
```
c)
```
SELECT * from Movie WHERE release_Date < CURDATE() ORDER BY release_Date DESC LIMIT 3;
```
d)
```
SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;
```