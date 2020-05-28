import * as fs from 'fs';
import * as moment from 'moment';
moment.locale('pt-br');
export {}

type eventType = {
    name: string,
    description: string,
    dateStart: Date,
    dateEnd: Date
}

const arrayAllEvents: eventType[] = require('../allEvents.json');

const option: string = process.argv[2];
const name: string = process.argv[3];
const description: string = process.argv[4];
const dateStart: any = moment(process.argv[5], "DD/MM/YYYY, HH:mm");
const dateEnd: any = moment(process.argv[6], "DD/MM/YYYY, HH:mm");

function getEvents():void {
    const auxAllEvents = arrayAllEvents
    console.log(auxAllEvents);
}

const newEvent: eventType = {
    name: name,
    description: description,
    dateStart: dateStart.format("DD/MM/YYYY, HH:mm"),
    dateEnd: dateEnd.format("DD/MM/YYYY, HH:mm")
}

function createEvent() {
    try{
        if(name && description && dateStart && dateEnd){
            console.log("Preencha todos os requisitos.")
        }else{
            arrayAllEvents.push(newEvent);
    
            fs.writeFileSync("allEvents.json", JSON.stringify(arrayAllEvents));
            console.log("Evento criado com sucesso.");
        }
    }catch(err){
        console.log(err);
    }
}

switch(option){
    case "createEvent": {
        createEvent();
        break;
    }

    case "get": {
        getEvents();
        break;
    }

    case "today": {
        const today: moment.Moment = moment();

        console.log(today.format("DD/MM/YYYY, HH:mm"));
    }

    default:
        break;
}