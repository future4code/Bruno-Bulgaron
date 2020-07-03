import { BaseDatabase } from "./BaseDatabase";
import { showSignUpInputDTO } from '../dto/ShowDTO';

export class ShowsDatabase extends BaseDatabase{
    public async createShow(body: showSignUpInputDTO){
        console.log(body);
        
        await super.getConnection()
            .insert(body)
            .into(BaseDatabase.TABLE_SHOWS);
    };
};