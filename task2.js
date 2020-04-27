//Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть true.

let number = [12, 4, 50, 1, 0, 18, 40];

let numZero = number.some(value => value === 0);

console.log(numZero);