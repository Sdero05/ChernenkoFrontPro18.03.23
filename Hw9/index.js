// let message = "";
// for (let i = 10; i <= 20; i++) {
//     message += i ;
//     if (i < 20){
//     message += ", ";
//     }
// }
// alert('Числа від 10 до 20: ' + message);



// for (let i = 10; i <20; i++){
//     let result = i * i;
//     alert(result)
// }



// let message = "";
// for (let i = 1; i <= 10; i++){
//     let result = i * 7;
//     message += i + " * 7 =" + result + "\n"
// }
// alert(message)


// let result = 0;
// for (let i = 1; i <= 15; i++) {
//     result += i;
// }
// alert("Сума чисел від 1 до 15: " + result);


// let result = 1;
// let message = "Добуток усіх цілих чисел від 15 до 35: ";
// for (let  i = 15; i <= 35; i++){
//     result *= i
//     message += i + " * "
// }
// message += " = " + result
// alert(message)



// let sum = 0;
// for (let i = 1; i <= 500; i++) {
//     sum += i;
// }
//
// let result = sum / 500;
//
// alert("Середнє арифметичне чисел від 1 до 500: " + result)



// let result = 0;
//
// for (let i = 30; i <= 80; i++) {
//     if (i % 2 === 0) {
//         result += i;
//     }
// }
//
// alert("Сума парних чисел від 30 до 80: " + result);




// let message = "";
//
// for (let i = 100; i <= 200; i++) {
//     if (i % 3 === 0) {
//         message += i + ", ";
//     }
// }
//
// alert("Числа, кратні 3, від 100 до 200: " + message);




// let number = prompt("Введіть натуральне число:");
// let message = "";
//
// for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//         message += i + ", ";
//     }
// }
//
// message = "Дільники числа " + number + ": " + message;
// alert(message);



// let num = prompt("Введіть натуральне число:");
// let mas = [];
// let result = 0;
//
// for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//         mas.push(i);
//         if (i % 2 === 0) {
//             result++;
//         }
//     }
// }
//
// alert(`Дільники: ${mas}. Кількість парних дільників: ${result}`);



// let num = parseInt(prompt("Введите натуральное число: "));
// let mas = [];
// let result = 0;
// let sum = 0;
//
// for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//         mas.push(i);
//         if (i % 2 === 0) {
//             result++;
//             sum += i;
//         }
//     }
// }
//
// alert(`Дільники: ${mas}\nКількість парних дільників: ${result}\nСума парних дільників: ${sum}`);



// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         const result = i * j;
//         console.log(`${i} x ${j} = ${result}`);
//     }
// }

