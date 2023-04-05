// const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
//
// // Задача 1: знайти суму та кількість позитивних елементів.
// let sumPositive = 0;
// let countPositive = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         sumPositive += arr[i];
//         countPositive++;
//     }
// }
// console.log(`Сума позитивних елементів: ${sumPositive}`);
// console.log(`Кількість позитивних елементів: ${countPositive}`);
//
// // Задача 2: знайти мінімальний елемент масиву та його порядковий номер.
// let min = arr[0];
// let minIndex = 0;
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//         minIndex = i;
//     }
// }
// console.log(`Мінімальний елемент масиву: ${min}`);
// console.log(`Порядковий номер мінімального елементу масиву: ${minIndex}`);
//
// // Задача 3: знайти максимальний елемент масиву та його порядковий номер.
// let max = arr[0];
// let maxIndex = 0;
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//         maxIndex = i;
//     }
// }
// console.log(`Максимальний елемент масиву: ${max}`);
// console.log(`Порядковий номер максимального елементу масиву: ${maxIndex}`);
//
// // Задача 4: визначити кількість негативних елементів.
// let countNegative = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         countNegative++;
//     }
// }
// console.log(`Кількість негативних елементів: ${countNegative}`);
//
// // Задача 5: знайти кількість непарних позитивних елементів.
// let countOddPositive = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0 && arr[i] % 2 !== 0) {
//         countOddPositive++;
//     }
// }



// console.log(`Кількість непарних позитивних елементів: ${countOddPositive}`);
// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let positiveArr = arr.filter((num) => num > 0);
// let evenPositiveArr = positiveArr.filter((num) => num % 2 === 0);
// let evenPositiveCount = evenPositiveArr.length;
// console.log("Кількість парних позитивних елементів: " + evenPositiveCount);


// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let positiveArr = arr.filter((num) => num > 0);
// let evenPositiveArr = positiveArr.filter((num) => num % 2 === 0);
// let evenPositiveSum = evenPositiveArr.reduce((a, b) => a + b, 0);
// console.log("Сума парних позитивних елементів: " + evenPositiveSum);


// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let positiveArr = arr.filter((num) => num > 0);
// let oddPositiveArr = positiveArr.filter((num) => num % 2 !== 0);
// let oddPositiveSum = oddPositiveArr.reduce((a, b) => a + b, 0);
// console.log("Сума непарних позитивних елементів: " + oddPositiveSum);

// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let positiveArr = arr.filter((num) => num > 0);
// let product = positiveArr.reduce((a, b) => a * b, 1);
// console.log("Добуток позитивних елементів: " + product);

// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let max = arr[0];
// let maxIndex = 0;
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//         maxIndex = i;
//     }
// }
// for (let i = maxIndex + 1; i < arr.length; i++) {
//     arr[i] = 0;
// }
// console.log("Максимальний елемент масиву: " + max);
// console.log("Масив після обнулення: " + arr);
