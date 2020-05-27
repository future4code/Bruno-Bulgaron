"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews';
const getAllSubscribers = () => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield axios_1.default.get(`${baseUrl}/subscribers/all`);
    return allUsers.data.map((res) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email
        };
    });
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield getAllSubscribers();
        const promiseArray = [];
        for (const user of users) {
            console.log("Enviando notificação para ", user.name);
            promiseArray.push(axios_1.default.post(`${baseUrl}/notifications/send`, {
                subscriberId: user.id,
                message: "Notificação agora vai sem erro real oficial 100%"
            }));
            yield Promise.all(promiseArray);
            console.log("Notificação enviada.");
        }
    }
    catch (err) {
        console.log(err);
    }
});
main();
//# sourceMappingURL=exercicio6.js.map