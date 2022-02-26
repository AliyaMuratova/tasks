// 1

/* 1) Переделать этот код так, чтобы в нем были операторы инкремента и декремента:
let num = 10;
num = num + 1;
num = num + 1;
num = num - 1;
console.log(num); */

let num = 10;
num = ++ num;
num = ++ num;
num = -- num;
console.log(num);

// 2

/* 2) Переделайте этот код так, чтобы в нем использовались операторы присвоения:
let num = 47;
num = num + 7;
num = num - 18;
num = num * 10;
num = num / 15;
alert(num); */

let num1 = 47;
num1 += 7;
num1 -= 18;
num1 *= 10;
num1 /= 15;
alert(num1);

// 3
// Примеры на все комбинации оператора &&

const a = 10;
const b = 20;
const c = 30;
const result = a < b && b < c
console.log(result)  //true + true = true

const firstNum = 5;
const secondNum = 50;
const thirdNum = 500;
const result1 = firstNum < thirdNum && firstNum > secondNum //true + false = false
console.log(result1)

const e = true;
const d = false;
const result2 = e === false && d === true // false + false = false;
console.log(result2)

const n = 5 * (7 - 4);
const m = 1 + 2 + 7;
const result3 = n == 16 && m == 10 // false + true = false;
console.log(result3)


// Примеры на все комбинации оператора ||

const z = 15;
const q = 5;
const res = z == 15 || q == 5  // true + true = true;
console.log(res)

const v = true;
const x = false;
const res1 = v === true || x === true // true + false = true;
console.log(res1)

const sum = 2 * (2 + 3);
const sum1 = 4 - 1 + 7;
const sum2 = 10
const res2 = sum > sum1 || sum2 > sum // false + false = false;
console.log(res2)

const age = 21;
const ageControl1 = 18;
const ageControl2 = 25;
const access = age > ageControl1 || age < ageControl2  // false + true = true;
console.log(access)

