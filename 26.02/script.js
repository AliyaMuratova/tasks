// 1

 let x = 7;
if (x == 7){
    alert('Верно')
}else {
    alert('Неверно')
}

// 2

let a = 1;
let b = 3
if (a <= 1 && b >= 3) {
 console.log(a + b)
} else {
    console.log(b - a)
}

// 3

let time = 17;

if (time >= 0 && time <= 14) {
    console.log('Первая четверть')
} else if (time >= 15 && time <= 29) {
    console.log('Вторая четверть')
} else if (time >= 30 && time <= 44) {
    console.log('Третья четверть')
} else if (time >= 45 && time <= 59) {
    console.log('Четвертая четверть')
} else {
    console.log('Значение не попадает в диапозон от 0 до 59')
}

// 4

let test = true;
if ( test !== true) {
    alert('Верно')
} else {
    alert('Неверно')
}



test !== true ? alert('Верно') : alert('Неверно')





