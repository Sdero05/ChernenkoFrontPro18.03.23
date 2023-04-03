const length = parseInt(prompt('Введіть довжину масиву: '));// Запитати користувача про довжину масиву

const arr = [];
for (let i = 0; i < length; i++) {
    arr.push(parseInt(prompt(`Введіть елемент з індексом ${i}: `)));
}

alert(`Масив до сортування: ${arr}`);

arr.sort((a, b) => a - b);

alert(`Масив після сортування: ${arr}`);

arr.splice(1, 3);

alert(`Масив після видалення елементів з 2 по 4: ${arr}`);
