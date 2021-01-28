import { Request, Response } from 'express'
import { HashManager } from '../services/HashManager'
import { IdGenerator } from '../services/IdGenerator';
import { UsersDatabase } from '../data/UsersDatabase';
import { Authenticator } from '../services/Authenticator';
import { UsersBusiness } from '../business/UsersBusiness';

export class UsersController {
    public async signUp(req: Request, res: Response){
        try{
            const userData = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            }

            const signUpUser = await new UsersBusiness().signUp(
                userData,
                new IdGenerator,
                new HashManager,
                new Authenticator,
                new UsersDatabase
            )

            res.status(200).send({ token: signUpUser });
        }catch(error){
            res.status(400).send({ message: error.message });
        };
    };

    public async login(req: Request, res: Response){
        try{
            const userData = {
                email: req.body.email,
                password: req.body.password
            };            

            const login = await new UsersBusiness().login(
                userData,
                new UsersDatabase,
                new HashManager,
                new Authenticator
            );
            
            res.status(200).send(login);            
        }catch(error){
            res.status(400).send({ message: error.message });
        };
    };
};