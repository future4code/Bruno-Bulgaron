import { Request, Response } from 'express'
import { IdGenerator } from '../services/IdGenerator';
import { BandsDatabase } from '../data/BandsDatabase';
import { BandsBusiness } from '../business/BandsBusiness';
import { Authenticator } from '../services/Authenticator';
import {successMessage} from '../messages';

export class BandsController {
    public async createBand(req: Request, res: Response){
        try{
            const bandData = {
                name: req.body.name,
                music_genre: req.body.music_genre,
                responsible: req.body.responsible,
                token: req.headers.auth
            }

            const createBand = await new BandsBusiness().createBand(
                bandData,
                new IdGenerator,
                new Authenticator,
                new BandsDatabase,
            )

            res.status(200).send({ response: successMessage.successBand });
        }catch(error){
            res.status(400).send({ message: error.message });
        };

        await new BandsDatabase().destroyConnection();
    };

    public async getBandById(req: Request, res: Response){
        try{
            const data = {
                token: req.headers.auth,
                id: req.params.id
            };

            const band = await new BandsBusiness().getBandById(
                data,
                new BandsDatabase,
                new Authenticator
            );

            res.status(200).send({ response: band });

        }catch(error){
            res.status(400).send({ message: error.message });
        };

        await new BandsDatabase().destroyConnection();
    };
};