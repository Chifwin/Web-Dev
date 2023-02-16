"use strict"

let a = prompt("Enter a number")
if (a < 0){
    alert(-1)
}else if (a > 0){
    alert(1)
}else{
    alert(0)
}

// another variant
alert(a > 0 ? 1 : (a < 0 ? -1 : 0));

// 2
let result;
// if (a + b < 4) {
//     result = 'Below';
// } else {
//     result = 'Over';
// }
result = a+b < 4 ? "Below" : "Over";

// 3
let message, login;

// if (login == 'Employee') {
//     message = 'Hello';
// } else if (login == 'Director') {
//     message = 'Greetings';
// } else if (login == '') {
//     message = 'No login';
// } else {
//     message = '';
// }
message = (login == 'Employee' ? 'Hello' :
login == 'Director' ? 'Greetings' :
login == '' ? 'No login' : '')