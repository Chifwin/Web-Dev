"use strict"

// 1
// Use the for loop to output even numbers from 2 to 10.
for (let i = 2; i <= 10; i += 2){
    alert(i)
}

// 2
// Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
//
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
// }
let i = 0;
while(i < 3){
    alert(`number ${i++}`);
}

// 3
// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
let num;
do{
    num = prompt("Enter number greater than 100")
} while (num < 100 && num);

// 4
// Write the code which outputs prime numbers in the interval from 2 to n.
let n = prompt("Enter number")
// assume that n is integer
outer: for (let i = 2; i <= n; i++){
    for(let j = 2; j*j <= i; j++){
        if (i%j == 0) continue outer;
    }
    console.log(i)
}