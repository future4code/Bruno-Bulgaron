import moment from 'moment';
import { start } from 'repl';

export class DateValidator {
    
    private static validDays: any = {
        5: "friday",
        6: "saturday",
        0: "sunday"
    };

    public validateDay(week_day: string){

        const day = moment(week_day, "YYYY/MM/DD").day();

        if(DateValidator.validDays[day]){
            return true;
        }else{
            return false;
        };        
    };

    public validateTime(start_time: number, end_time: number):boolean{

        if(start_time<8 || start_time>22) return false;

        if(end_time<start_time || end_time>23) return false;

        return true;
    };
};