import { BaseDatabase } from './BaseDatabase';
import { bandSignUpInputDTO } from '../dto/BandDTO';

export class BandsDatabase extends BaseDatabase {

    public async createBand(body: bandSignUpInputDTO){
        await super.getConnection()
            .insert(body)
            .into(BaseDatabase.TABLE_BANDS);
                
    };

    public async getBandById(id: string){
        const result = await super.getConnection()
            .select("*")
            .from(BaseDatabase.TABLE_BANDS)
            .where({id})

        return result[0];
    };
};