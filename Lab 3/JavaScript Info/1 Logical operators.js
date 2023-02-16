"use strict"

// 1
// Write an if condition to check that age is between 14 and 90 inclusively.
let age;
if (14 <= age && age <= 90){}

// 2
// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.
if (!(14 <= age && age <= 90)){}
if (age <= 14 || age >= 90){}

// 3
// Write the code which asks for a login with prompt.
let login = prompt("Who is here?")
if (login === 'Admin'){
    let password = prompt("Password?")
    if (password === "TheMaster"){
        alert("Welcome!")
    }else if (!!password){
        alert("Canceled")
    }else{
        alert("Wrong password")
    }
}else if (!!login){
    alert("Canceled")
}else{
    alert("I don't know you")
}