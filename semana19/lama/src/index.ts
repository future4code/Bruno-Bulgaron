import dotenv from "dotenv";
import express from "express";
import { AddressInfo } from "net";
import { usersRouter } from './routes/usersRouter';
import { bandsRouter } from "./routes/bandsRouter";
import { showsRouter } from "./routes/showsRouter";

dotenv.config();
const app = express();
app.use(express.json());

app.use('/users', usersRouter);
app.use('/bands', bandsRouter);
app.use('/shows', showsRouter);

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