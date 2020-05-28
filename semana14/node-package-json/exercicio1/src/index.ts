export {}

let operation: string = process.argv[2];
let num1: number = Number(process.argv[3]);
let num2: number = Number(process.argv[4]);

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
