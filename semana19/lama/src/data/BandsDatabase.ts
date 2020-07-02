import { BaseDatabase } from './BaseDatabase';
import { bandSignUpInputDTO } from '../dto/BandDTO';

export class BandsDatabase extends BaseDatabase {

    public async createBand(body: bandSignUpInputDTO){
        try{
            await super.getConnection()
                .insert(body)
                .into(BaseDatabase.TABLE_BANDS);

            super.destroyConnection();
        }catch(error){
            throw new Error(error.message);
        };
    };
};