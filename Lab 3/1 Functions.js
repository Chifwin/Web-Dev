"use strict"

// 1
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
}
function checkAge(age) {
    return age > 18 ? true :  confirm('Did parents allow you?');
}
function checkAge(age) {
    return age > 18 ||  confirm('Did parents allow you?');
}

// 2
function min(a, b){
    return a < b ? a : b;
}
// 3
function pow(a, n){
    let ans = 1
    for(let i = 0; i < n; i++){
        ans  *= a
    }
    return ans;
}
let a = prompt("x?", '');
let n = prompt("n?", '');
alert( pow(a, n) );