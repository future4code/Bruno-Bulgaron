import { Request, Response } from 'express'
import { IdGenerator } from '../services/IdGenerator';
import { ShowsDatabase } from '../data/ShowsDatabase';
import { successMessage } from '../messages';
import { Authenticator } from '../services/Authenticator';
import { ShowsBusiness } from '../business/ShowsBusiness';
import { DateValidator } from '../services/DateValidator';

export class ShowsController {
    public async createShow(req: Request, res: Response){
        try{
            const showData = {
                week_day: req.body.week_day,
                start_time: req.body.start_time,
                end_time: req.body.end_time,
                token: req.headers.auth,
                band_id: req.body.band_id
            };

            const createShow = await new ShowsBusiness().createShow(
                showData,
                new IdGenerator,
                new ShowsDatabase,
                new Authenticator,
                new DateValidator
            );
            
            res.status(200).send({ response: successMessage.successShow });

        }catch(error){
            res.status(400).send({ message: error.message });
        };
    };
};