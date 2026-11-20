// Calculator that accept two numbers and a operator

let num1 = 45;
let num2 = 18;

let operator = "--";

switch (operator) {
  case "+":
    console.log("Addition = ", num1 + num2);
    break;

  case "-":
    console.log("Subtraction = ", num1 - num2);
    break;

  case "*":
    console.log("Multiplication = ", num1 * num2);
    break;

  case "/":
    console.log("Division = ", num1 / num2);
    break;

  default:
    console.log("RCB");
}
