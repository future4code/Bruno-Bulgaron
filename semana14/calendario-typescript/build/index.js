"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const moment = require("moment");
moment.locale('pt-BR');
const arrayAllEvents = require('../allEvents.json');
const option = process.argv[2];
const name = process.argv[3];
const description = process.argv[4];
const dateStart = moment(process.argv[5], "DD/MM/YYYY, HH:mm");
const dateEnd = moment(process.argv[6], "DD/MM/YYYY, HH:mm");
function getEvents() {
    const auxAllEvents = arrayAllEvents;
    console.log(auxAllEvents);
}
const newEvent = {
    name: name,
    description: description,
    dateStart: dateStart.format("DD/MM/YYYY, HH:mm"),
    dateEnd: dateEnd.format("DD/MM/YYYY, HH:mm")
};
function createEvent() {
    try {
        if (name && description && dateStart && dateEnd) {
            console.log("Preencha todos os requisitos.");
        }
        else {
            arrayAllEvents.push(newEvent);
            fs.writeFileSync("allEvents.json", JSON.stringify(arrayAllEvents));
            console.log("Evento criado com sucesso.");
        }
    }
    catch (err) {
        console.log(err);
    }
}
switch (option) {
    case "createEvent": {
        createEvent();
        break;
    }
    case "get": {
        getEvents();
        break;
    }
    case "today": {
        const today = moment();
        console.log(today.format("DD/MM/YYYY, HH:mm"));
    }
    default:
        break;
}
//# sourceMappingURL=index.js.map