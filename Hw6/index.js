let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let num3 = prompt("Enter the third number:");

num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Please enter valid numerical values.");
} else {
    let avg = (num1 + num2 + num3) / 3;
    alert("Arithmetic average of these numbers: " + avg);
}