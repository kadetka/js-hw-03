//Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}
//Напишите функцию, которая из элементов массива соберет и вернёт строку, основываясь на index каждой буквы. Например: [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”

let array = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];


function text (arr) {
    let arrSort = arr.sort(function(a,b){
        if (a.index > b.index) {
            return 1;
          }
        if (a.index < b.index) {
            return -1;
        }
        return 0;
    });
    
    let str = arr.map(value => value.char).join('');
    return str;
}
console.log(text(array));