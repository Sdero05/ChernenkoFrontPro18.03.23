// const array = [1, 2, 'a', 3, 'b', 4];
// function average(numbers) {
//     const filteredNumbers = numbers.filter((value) => typeof value === 'number');
//     const sum = filteredNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//     return sum / filteredNumbers.length;
// }
// console.log(average(array));
// let x = Number(prompt('Введите первое число:'));
// let y = Number(prompt('Введите второе число:'));
// let znak = prompt('Введите знак арифметической операции:');
//
// function doMath(x, znak, y) {
//     switch (znak) {
//         case '+':
//             return x + y;
//         case '-':
//             return x - y;
//         case '*':
//             return x * y;
//         case '/':
//             return x / y;
//         case '%':
//             return x % y;
//         case '^':
//             return Math.pow(x, y);
//         default:
//             return null;
//     }
// }
//
// // Запрашиваем у пользователя первое число, пока он не введет корректное значение
// do {
//     x = Number(prompt('Введите первое число:'));
// } while (isNaN(x));
//
// do {
//     y = Number(prompt('Введите второе число:'));
// } while (isNaN(y));
//
// do {
//     znak = prompt('Введите знак арифметической операции:');
// } while (!['+', '-', '*', '/', '%', '^'].includes(znak));
//
// const result = doMath(x, znak, y);
//
// alert(`Результат операции ${x} ${znak} ${y} = ${result}`);


// function fillArray(rows, cols) {
//     const result = [];
//     for (let i = 0; i < rows; i++) {
//         const row = [];
//         for (let j = 0; j < cols; j++) {
//             let value;
//
//             do {
//                 value = prompt(`Введите значение для столбца строки ${i} ${j}`);
//             } while (value === null || value.trim() === '');
//
//             const numValue = Number(value);
//             if (!isNaN(numValue)) {
//                 row.push(numValue);
//             } else {
//                 row.push(value);
//             }
//         }
//         result.push(row);
//     }
//     return result;
// }
//
// let rows, cols;
// do {
//     rows = prompt('Введите количество строк:');
// } while (isNaN(rows) || rows < 1);
//
// do {
//     cols = prompt('Введите количество столбцов:');
// } while (isNaN(cols) || cols < 1);
//
// const array = fillArray(rows, cols);
// alert(`Созданный массив:\n${JSON.stringify(array)}`);
// console.log(array);

function removeChars(string, chars) {
    let regex = new RegExp(`[${chars.join('')}]`, 'g');
    return string.replace(regex, '');
}

let string = prompt('Введите строку:');
let charsToRemove = prompt('Введите символы для удаления (через запятую):')
    .split(',')
    .map(char => char.trim());

let newString = removeChars(string, charsToRemove);
alert(`Строка без символов "${charsToRemove}":\n${newString}`);
console.log(newString);
