// Задача 1
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for(let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 10 && numbers[i] > 0){
        console.log(numbers[i])
    }
}

//Задача 2
const arr = [1, 2, 5, 6, 88, 5];
let sum = 0
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);


//Задача 3
const array = [2, 5, 7, 1, 6, 0, 10, 3, 9, 4];
let square = 0;
for(let i = 0; i < array.length; i++) {
    square += array[i] * array[i]
}
console.log(square);

//Задача 4
const array1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let newArray = [];
for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 === 0){
        newArray.push(array1[i])
    }
}
console.log(newArray)

//Задача 5
let array2 = [];
for(let i =0; i < 10; i++) {
    array2[i] = 'x';
}
console.log(array2)