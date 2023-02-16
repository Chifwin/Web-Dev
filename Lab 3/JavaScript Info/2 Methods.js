"use strict"

// 1
let calculator = {
    read(){
        this.a = prompt("Enter a")
        this.b = prompt("Enter b")
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    }
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// 2
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() { // shows the current step
        alert( this.step )
        return this;
    }
};
ladder.up().up().down().showStep().down().showStep();