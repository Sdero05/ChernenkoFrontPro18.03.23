// let message = "";
//
// for(let i = 20; i <= 30; i += 0.5) {
//     message += i.toFixed(1) + " ";
// }
//
// alert(message);

// const Dolar = 27;
// let message = '';
//
// for (let i = 10; i <= 100; i += 10) {
//     const cost = i * Dolar;
//     message += `${i} доларів коштує ${cost} гривень\n`;
// }
//
// alert(message);



// let n = 78;  // задане число
// let numbers = [];
//
// for (let i = 1; i <= 100; i++) {
//     if (i * i <= n) {
//         numbers.push(i);
//     }
// }
// alert(numbers);


// let n = 17;  // задане число
// let variable = true;
//
// if (n <= 1) {
//     variable = false;
// } else {
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             variable = false;
//             break;
//         }
//     }
// }
//
// if (variable) {
//     console.log(`${n} is prime.`);
// } else {
//     console.log(`${n} is not prime.`);
// }



let n = 54; // число
let NumberStorage = 0;
let result = 1;

while (result < n) {
    result *= 3;
    NumberStorage++;
}

if (result === n) {
    console.log(n + " є степенем числа 3 з показником " + NumberStorage);
} else {
    console.log(n + " не є степенем числа 3");
}