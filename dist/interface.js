"use strict";
class Developer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(message) {
        console.log(message);
    }
}
let addFunc;
addFunc = (num1, num2) => {
    return num1 + num2;
};
console.log(addFunc(1, 2));
