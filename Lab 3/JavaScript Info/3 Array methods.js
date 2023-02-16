"use script"


// 1
function camelize(str) {
    return str
        .split('-').map((word, index) => index == 0 ? word :
            (word[0].toUpperCase() + word.slice(1))).join('');
}

// 2
function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}

// 3
function filterRangeInPlace(ar, a, b){
    let j = 0;
    for (let i = 0; i < ar.length; i++) {
        if (a <= ar[i] && ar[i] <= b) {
            ar[j] = ar[i];
            j++;
        }
    }
    ar.splice(j, ar.length - j);
}
// 4
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
alert( arr );

// 5
function copySorted(arr) {
    return arr.slice().sort();
}
// 6
function Calculator() {
    this.ops = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
    this.calculate = function(str) {
        let split = str.split(' '), a = +split[0], op = split[1], b = +split[2];
        return this.ops[op](a, b);
    };
    this.addMethod = function(name, func) {
        this.ops[name] = func;
    };
}
// 7
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [ john, pete, mary ];
let names = users.map(item => item.name);
alert( names ); // John, Pete, Mary

// 8
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];
let usersMapped = users.map(user => ({fullName: `${user.name} ${user.surname}`, id: user.id}));
alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // John Smith

// 9
function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let arr = [ pete, john, mary ];
sortByAge(arr);

alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete

// 10
function shuffle(array) {
    for (let i = 1; i < array.length(); i++) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
// 11
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 29};
let arr = [john, pete, mary];

alert(getAverageAge(arr));

// 12
function unique(arr) {
    let result = [];
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}

// 13
function groupById(array) {
    return array.reduce((obj, value) => { obj[value.id] = value; return obj; }, {})
}