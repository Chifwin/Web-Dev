"use script"

// 1
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggae");

// 2
function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt("Enter number", 0);
        if (value === "" || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

// 3
function getMaxSubSum(arr) {
    let ans = 0;
    let cur = 0;
    for (let item of arr) { // for each item of arr
        cur += item; // add it to partialSum
        ans = Math.max(ans, cur); // remember the maximum
        if (cur < 0) cur = 0; // zero if negative
    }
    return ans;
}