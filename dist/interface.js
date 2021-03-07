"use strict";
var Developer = /** @class */ (function () {
    function Developer(name, age) {
        this.name = name;
        this.age = age;
    }
    Developer.prototype.greet = function (message) {
        console.log(message);
    };
    return Developer;
}());
var addFunc;
addFunc = function (num1, num2) {
    return num1 + num2;
};
console.log(addFunc(1, 2));
