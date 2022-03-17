// Задача

const fillArray = (elem, length) => {
    let newArray = [];
    for(length; length > 0; length--) {
        newArray.push(elem);
    }
    return newArray;
}
console.log(fillArray('a', 3))

//Пример метод Reduce

let arr = [-5, 10, 5, 55, -1, 22, -4, 36, -45];
let result = arr.reduce(function (sum, elem) {
    if (elem >= 0) {
        return sum + elem;
    }else {
        return sum;
    }
});
console.log(result);

/*
1) sum = -5, elem = 10 (10 >= 0  //true)
    -5 + 10
    return 5;
2) sum = 5, elem = 5 (5 >= 0  //true)
    5 + 5
    return 10;
3) sum = 10, elem = 55 (55 >= 0  //true)
    10 + 55
    return 65;
4) sum = 65, elem = 22 (22 >= 0  //true)
    65 + 22
    return 87;
5) sum = 87, elem = 36 (36 >= 0  //true)
    87 + 36
    return 123;

    // 123
*/
