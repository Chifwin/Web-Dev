"use strict"


// 1
function sumSalaries(salaries) {
    let sum = 0;
    for (let x of Object.values(salaries)) {
        sum += x;
    }
    return sum;
}
// 2
function count(obj) {
    return Object.keys(obj).length;
}