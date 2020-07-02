import {failureMessage} from '../messages';
import { BaseDatabase } from '../data/BaseDatabase';

export class BandsBusiness {
    public async createBand(
        bandData: any,
        IdGenerator: any,
        Authenticator: any,
        BandsDatabase: any
    ): Promise<void>{        
        const auth = Authenticator.getData(bandData.token);

        if(auth.role !== "admin"){
            throw new Error(failureMessage.role)
        }

        const id = IdGenerator.generate();        

        const createBand = await BandsDatabase.createBand({
            id,
            name: bandData.name,
            music_genre: bandData.music_genre,
            responsible: bandData.responsible
        });        
    };
};