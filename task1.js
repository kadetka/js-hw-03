//На основе массива [1,2,3,5,8,9,10] сформировать новый массив, каждый элемент которого будет хранить информацию о числе и его четности

let numbers = [1,2,3,5,8,9,10];

let res = numbers.map(function(value){
    value = {digit: value, odd: false};
    if(value.digit % 2 !== 0){
        value.odd = true
    };
    return value;
})

console.log(res);