"use strict"

// 1
function Calculator () {
    this.read = function (){
        this.a = +prompt("Enter a")
        this.b = +prompt("Enter b")
    };
    this.sum = function (){
        return this.a + this.b;
    };
    this.mul = function (){
        return this.a * this.b;
    }
}
let c = new Calculator();
c.read();
c.sum();
c.mul();

// 2
function Accumulator(x){
    this.value = x
    this.read = function (){
        this.value += +prompt("Enter value")
    }
}
let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);