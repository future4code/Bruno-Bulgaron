import dotenv from "dotenv";
import express from "express";
import { AddressInfo } from "net";
import { usersRouter } from './routes/usersRouter';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/users', usersRouter);

const server = app.listen(process.env.PORT || 3000, ()=>{
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Server is running http://localhost:${address.port}`);
    }else{
        console.error(`Failure upon starting server.`);
    };
});

function main(){

};

main();