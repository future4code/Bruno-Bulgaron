import { BaseDatabase } from "./BaseDatabase";
import { showSignUpInputDTO, bandDTO } from '../dto/ShowDTO';

export class ShowsDatabase extends BaseDatabase{
    public async createShow(body: showSignUpInputDTO){
        console.log(body);
        
        await super.getConnection()
            .insert(body)
            .into(BaseDatabase.TABLE_SHOWS);
    };

    public async getBandByDateAndHour(body: bandDTO){
        const result = await super.getConnection().raw(`
            SELECT * FROM lama_Shows WHERE week_day = '${body.week_day}' AND start_time >= ${body.start_time} AND start_time < ${body.end_time} OR end_time > ${body.start_time} AND end_time<= ${body.end_time}; 
        `);

        return result[0][0];
    };
};