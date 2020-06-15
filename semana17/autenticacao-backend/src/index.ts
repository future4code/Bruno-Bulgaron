import express, { Request, Response } from "express";
import knex from "knex";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { UserDatabase } from './data/UserDatabase';
import { IdGenerator } from './services/IdGenerator';
import { Authenticator } from "./services/Authenticator";

dotenv.config();

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

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Uhuuul! Tá no ar em: http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

app.post("/signup", async(req: Request, res: Response) => {
    try{
        if(!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("E-mail inválido.");            
        }

        if(!req.body.password || req.body.password.length < 6) {
            throw new Error("A senha deve conter 6 caracteres ou mais.");
        }

        const userData = {
            email: req.body.email,
            password: req.body.password
        };

        const idGenerator = new IdGenerator;
        const id = idGenerator.generate();

        const userDb = new UserDatabase();
        await userDb.createUser(
            id,
            userData.email,
            userData.password
        )

        const authenticator = new Authenticator();
        const token = authenticator.generateToken({
            id
        });

        res.status(200).send({
            token
        })
    }catch(error){
        res.status(400).send({
            message: error.message
        })
    }
})

app.post("/login", async(req: Request, res: Response) => {
    try{
        const userData = {
            email: req.body.email,
            password: req.body.password
        }
        
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("E-mail inválido");
        }

        const userDb = new UserDatabase();
        const user = await userDb.getUserByEmail(userData.email);

        // if(user.password !== userData.password){
        //     throw new Error("Senha inválida.")
        // }

        const authenticator = new Authenticator();
        const token = authenticator.generateToken({
            id: user.id
        })
        res.status(200).send({
            token
        })
    }catch(error){
        res.status(400).send({
            message: error.message
        })
    }
})

app.get("/user/profile", async(req: Request, res: Response) => {
    try{
        const token = req.headers.authorization as string;

        const authenticator = new Authenticator();
        const authenticationData = authenticator.getData(token);

        const userDb = new UserDatabase();
        const user = await userDb.getUserById(authenticationData.id);

        res.status(200).send({
            id: user.id,
            email: user.email
        });
    }catch(error){
        res.status(400).send({
            message: error.message
        })
    }
})

// const teste = new UserDatabase();
// teste.getUserByEmail("bruno@gmail.com");