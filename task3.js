//Проверить, все элементы массива имеют длину более 3х символов ['yes', 'hello', 'no', 'easycode', 'what']. Если да - вернуть true

let arr = ['yes', 'hello', 'no', 'easycode', 'what'];

let threeLength = arr.every(value => value.length > 3);

console.log(threeLength);