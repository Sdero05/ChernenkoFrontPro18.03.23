let operation = prompt("What operation do you want to perform? Enter add to add, sub to subtract, mult to multiply, or div to divide.");
let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

num1 = Number(num1);
num2 = Number(num2);

let result;
if (operation === "add") {
    result = num1 + num2;
} else if (operation === "sub") {
    result = num1 - num2;
} else if (operation === "mult") {
    result = num1 * num2;
} else if (operation === "div") {
    result = num1 / num2;
} else {
    alert(`error`);
}

alert(`Result ${operation} for numbers ${num1} and ${num2}: ${result}`);

