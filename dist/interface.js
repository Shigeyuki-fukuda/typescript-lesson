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
