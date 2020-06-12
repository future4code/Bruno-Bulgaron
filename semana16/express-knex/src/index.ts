import express from "express";
import dotenv from "dotenv";
import knex from "knex";
import { AddressInfo } from "net";
import { Request, Response } from "express";

const app = express();
app.use(express.json());

dotenv.config();

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || 3306),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME,    
    },
});

const server = app.listen(process.env.PORT || 3000, () => {
    if(server) {
        const address = server.address() as AddressInfo;
        console.log(`Uhuuuul, deu bom! Tá no ar em:${address.port}`);
    }else{
        console.error("Erro: deu ruim.");
    }
})



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


app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const actor = await getActorById(id);
  
      res.status(200).send(actor)
    } catch (error) {
      res.status(400).send({
        message: error.message,
      });
    }
  });

const getActorById = async (id: string): Promise<void> => {
    try {
        const result = await connection.raw(`
        SELECT * FROM Actor WHERE id = '${id}'
        `)

        return (result[0][0]);
    }catch(error){
        console.error(error.message)
    }
}

// getActorById("001");

// getActorByName
// try{
//     const getActorByName = async (name: string): Promise<void> => {
//         const result = await connection.raw(`
//             SELECT * FROM Actor WHERE name = '${name}'
//         `)

//         return console.log(result[0][0])
//     }
//     getActorByName("Glória Pires");
// }catch(error){
//     console.error(error.message);
//}

// getGenderQty
const getGenderQty = async (gender: string): Promise<void> => {
    try{
        const result = await connection.raw(`
            SELECT Count(*) as count FROM Actor WHERE gender = '${gender}'
        `)

        return (result[0][0]);
    }catch(error){
        console.error(error.message);
    }
}

// getGenderQty("male");

// Exercício 2
// updateSalaryById
// const updateSalaryById = async (
//     id: string,
//     salary: number
// ) : Promise<void> => {
//     try{
//         await connection.update({
//             id: id,
//             salary: salary
//         })
//         .into("Actor")
//         .where("id", id);
//         return console.log("updateSalaryById deu bom.");
//     }catch(error){
//         console.error(error.message);
//     }
// };

// updateSalaryById("001", 100000);

// deleteUserById
// const deleteUserById = async (id: string) : Promise<void> => {
//     try{
//         await connection.delete()
//         .into("Actor")
//         .where("id", id)
        
//         return console.log("Usuário deletado com sucesso!");
//     }catch(error){
//         console.error(error.message);
//     }
// }

// deleteUserById("006");

// avgSalaryByGender
// const avgSalaryByGender = async (gender: string) : Promise<void> => {
//     try{
//         const result = await connection("Actor")
//         .avg("salary")
//         .where({gender: gender})

//         return console.log("A média é: ", result)
//     }catch(error){
//         console.error(error.message);
//     }
// }

// avgSalaryByGender("female");