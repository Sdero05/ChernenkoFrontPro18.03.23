let num1 = prompt("first number:");
let num2 = prompt("second number:");

num1 = Number(num1);
num2 = Number(num2);

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

alert(`result: ${sum}\nSubtraction result: ${difference}\nMultiplication result: ${product}\nThe result of the delay: ${quotient}`);