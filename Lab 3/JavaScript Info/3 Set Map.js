"use strict"


// 1
function unique(ar) {
    return Array.from(new Set(ar));
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
alert( unique(values) ); // Hare, Krishna, :-O

// 2
function aclean(ar) {
    let obj = new Map();
    for (let i = 0; i < ar.length; i++) {
        let s = ar[i].toLowerCase().split("").sort().join("");
        obj[s] = ar[i];x
    }
    return Object.values(obj);
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) );