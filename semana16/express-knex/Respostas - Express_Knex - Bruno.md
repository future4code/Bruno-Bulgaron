# Exercício 1

a) É um objeto com as informações do ator (id, name etc).
b)
```
try{
    const getActorByName = async (name: string): Promise<void> => {
        const result = await connection.raw(`
            SELECT * FROM Actor WHERE name = '${name}'
        `)

        return console.log(result[0][0])
    }
    getActorByName("Glória Pires");
}catch(error){
    console.error(error.message);
}
```
c)
```
// getGenderQty
const getGenderQty = async (gender: string): Promise<void> => {
    try{
        const result = await connection.raw(`
            SELECT Count(*) as count FROM Actor WHERE gender = '${gender}'
        `)

        return console.log(result[0][0]);
    }catch(error){
        console.error(error.message);
    }
}

getGenderQty("male")
```

# Exercício 2

a)
```
const updateSalaryById = async (
    id: string,
    salary: number
) : Promise<void> => {
    try{
        await connection.update({
            id: id,
            salary: salary
        })
        .into("Actor")
        .where("id", id);
        return console.log("updateSalaryById deu bom.");
    }catch(error){
        console.error(error.message);
    }
};

updateSalaryById("001", 100000);
```
b)
```
const deleteUserById = async (id: string) : Promise<void> => {
    try{
        await connection.delete()
        .into("Actor")
        .where("id", id)
        
        return console.log("Usuário deletado com sucesso!");
    }catch(error){
        console.error(error.message);
    }
}

deleteUserById("006");
```
c)
```
const avgSalaryByGender = async (gender: string) : Promise<void> => {
    try{
        const result = await connection("Actor")
        .avg("salary")
        .where({gender: gender})

        return console.log("A média é: ", result)
    }catch(error){
        console.error(error.message);
    }
}

avgSalaryByGender("female");
```

# Exercício 3

a) Porque é um parâmetro da requisição?
b) Informa se a resposta deu certo com um status (200) ou status (400)
c)
```
app.get("/actor", async (req: Request, res: Response) => {
    try{
        const response = await getGenderQty(req.query.gender as string)
        res.status(200).send({
            quantity: response
        })
    }catch(error){
        res.status(400).send({
            message: error.message
        })
    }
})
```

# Exercício 4

