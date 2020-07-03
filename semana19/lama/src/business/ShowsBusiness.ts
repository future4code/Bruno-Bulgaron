import { failureMessage } from "../messages";
import { bandDTO } from '../dto/ShowDTO';

export class ShowsBusiness {
    public async createShow(
        showData: any,
        IdGenerator: any,
        ShowsDatabase: any,
        Authenticator: any,
        DateValidator: any
    ): Promise<void>{
        const auth = Authenticator.getData(showData.token);

        if(!auth){
            throw new Error(failureMessage.invalidToken)
        };

        const date = DateValidator.validateDay(showData.week_day);

        if(!date){
            throw new Error(failureMessage.invalidDay);
        };

        const hour = DateValidator.validateTime(showData.start_time, showData.end_time);

        if(!hour){
            throw new Error(failureMessage.invalidHour);
        };

        const allThemDates: bandDTO = {
            week_day: showData.week_day,
            start_time: showData.start_time,
            end_time: showData.end_time
        };
        
        const availableDate = await ShowsDatabase.getBandByDateAndHour(allThemDates);
        if(availableDate){
            throw new Error(failureMessage.invalidDate);
        };
        
        const id = IdGenerator.generate();
        
        const createShow = await ShowsDatabase.createShow({
            id,
            week_day: showData.week_day,
            start_time: showData.start_time,
            end_time: showData.end_time,
            band_id: showData.band_id
        });
    };    
};