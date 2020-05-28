"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let operation = process.argv[2];
let num1 = Number(process.argv[3]);
let num2 = Number(process.argv[4]);
switch (operation) {
    case "add":
        console.log(num1 + num2);
        break;
    case "sub":
        console.log(num1 - num2);
        break;
    case "mult":
        console.log(num1 * num2);
        break;
    case "div":
        console.log(num1 / num2);
        break;
}
//# sourceMappingURL=index.js.map