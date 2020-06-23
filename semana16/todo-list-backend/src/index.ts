import express from "express";
import knex from "knex";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { Request, Response } from "express";
import moment from "moment";

dotenv.config();

// Conexão Banco de Dados

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME,
    },
});

// Express thingies
const app = express();

app.use(express.json()); 

const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });

// Funções
const createUser = async (
    name: string,
    nickname: string,
    email: string
): Promise<void> => {
    try{
        const id = Date.now()
        await connection.raw(`
            INSERT INTO TodoListUser (id, name, nickname, email)
            VALUES (
                '${id}',
                '${name}',
                '${nickname}',
                '${email}'
            )
        `)
        console.log("Usuário criado com sucesso!");
    }catch(error){
        console.error(error.message)
    }
}

const getUserById = async (
    id: string
): Promise<any> => {
    try{
        const result = await connection.raw(`
            SELECT * FROM TodoListUser WHERE id = '${id}'
        `)        
        return result[0][0];
    }catch(error){
        console.error(error.message);
    }
}

const updateUser = async (
    id: string,
    name: string,
    nickname: string
): Promise<any> => {
    try{
        const result = await connection.raw(`
            UPDATE TodoListUser SET name = '${name}', nickname = '${nickname}' WHERE id = '${id}'
        `)
        return result[0][0];
    }catch(error){
        console.error(error.message);
    }
}

const createTask = async (    
    title: string,
    description: string,
    limitDate: string,
    creatorUserId: string
): Promise<void> => {
    try{
        const taskId = Date.now()
        await connection.raw(`
            INSERT INTO TodoListTask (taskId, title, description, limitDate, creatorUserId)
            VALUES (
                '${taskId}',
                '${title}',
                '${description}',
                '${limitDate}',                
                '${creatorUserId}'
            )
        `)
        // console.log("Tarefa criada com sucesso!");
    }catch(error){
        console.error(error.message)
    }
}

const getTaskById = async(id: string): Promise<void> => {
    try{
        const result = await connection.raw(`
            SELECT * FROM TodoListTask WHERE taskId = '${id}'
        `)
        return result[0][0]
    }catch(error){
        console.error(error.message)
    }
}

// Endpoints

app.post("/user", async (req: Request, res: Response) =>{
    try{
      await createUser(req.body.name, req.body.nickname, req.body.email);
      res.status(200).send({
        message: "Usuário criado com sucesso"
      })
    }catch(error){
      res.status(440).send({
        message: error.message
      })
    }
  })

app.get("/user/:id", async (req: Request, res: Response) => {
    try{
        const user = await getUserById(req.params.id);
        if(user){
            res.status(200).send({
                message: user
            })
        }else{
            res.status(400).send({
                message: "ID inválido."
            })    
        }
    }catch(error){
        res.status(400).send({
            message: error.message
        })
    }
})

app.put("/user/edit", async (req: Request, res: Response) => {
    try{
        if(!req.body.name || !req.body.nickname || !req.body.id){
            res.status(400).send({
                message: "Preencha todos os campos necessários."
            })
        } else { 
            await updateUser(req.body.id, req.body.name, req.body.nickname)
            res.status(200).send({
                message: "Usuário editado com sucesso"
            }) 
        } 
    }catch(error){
        res.status(400).send({
            message: error.message
        })
    }
})

app.put("/task", async (req: Request, res: Response) => {
    const title = req.body.title;
    const description = req.body.description;
    const limitDate:string = moment(req.body.limitDate,"DD/MM/YYYY").format("YYYY/MM/DD").toString()
    const creatorUserId = req.body.creatorUserId;

    try{
        if(!title || !description || !limitDate || !creatorUserId){
            res.status(400).send({
                message: "Preencha todos os campos necessários para criar uma tarefa."
            })
        }else{
            const result = await createTask(title, description, limitDate, creatorUserId);
            res.status(200).send({
                message: "Tarefa criada com sucesso"
            })
            console.log("Sucesso no createTask através do endpoint!");
        }
    }catch(error){
        res.status(400).send({
            message: error.message
        })
    }
})

app.get("/task/:id", async (req: Request, res: Response) => {
    try{
        const result = await getTaskById(req.params.id);
        res.status(200).send(result)
        res.status(400).send({
            message: "Erro ao buscar task pelo ID."
        })
    }catch(error){
        console.error(error.message);
    }
})