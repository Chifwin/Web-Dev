"use strict"

// 1
let a = +prompt("The first number", "0");
let b = +prompt("The second number", "0");
alert(a + b);

// 2
function readNumber() {
    let num;
    do {
        num = prompt("Enter a number please?", 0);
    } while (!isFinite(num));
    if (num === null || num === '') return null;
    return +num;
}
alert(`Read: ${readNumber()}`);

// 3
function random(min, max){
    return min + Math.random() * (max - min);
}

// 4
function random(min, max){
    return Math.floor(min + Math.random() * (max + 1 - min));
}