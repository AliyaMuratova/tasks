// Задача 1

const getName = (name) => {
   if (name === undefined){
       name = 'гость';
   } console.log('Привет, ' + name);
}
getName('Василий')

// Задача 2

let array = [1, 2, 3, 4, 5, 6, 7]
let doubleValue = array.map((currentValue) => currentValue * 2);
console.log(doubleValue)