"use strict";
exports.__esModule = true;
var operation = process.argv[2];
var num1 = Number(process.argv[3]);
var num2 = Number(process.argv[4]);
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
