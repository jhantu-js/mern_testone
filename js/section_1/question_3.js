// Mathematical Operations

let num1 = 45;
let num2 = 18;
let operator = "+";

let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    console.log("Addition: " + result);

  case "-":
    result = num1 - num2;
    console.log("Subtraction: " + result);

  case "*":
    result = num1 * num2;
    console.log("Multiplication: " + result);

  case "/":
    result = num1 / num2;
    console.log("Division: " + result);

  case "%":
    result = num1 % num2;
    console.log("Modulus: " + result);

  default:
    console.log("Jhantu Pathak");
}
