"use strict"

// 1
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// 2
function isEmpty(obj){
    for (let i in obj){
        return false;
    }
    return true;
}

// 3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for (let i in salaries){
    sum += salaries[i];
}

// 4
function multiplyNumeric(obj){
    for (let i in obj){
        if (typeof i == "number"){
            obj[i] *= 2;
        }
    }
}