"use strict";
// ES5以前にクラスを作る方法としてあったコンストラクタ関数のES6以降版のシンタックスシュガー
var Person = /** @class */ (function () {
    function Person(initName) {
        this.name = initName;
    }
    Person.prototype.greet = function () {
        console.log("Hello! My name is " + this.name + "!!");
    };
    return Person;
}());
var john = new Person('John');
john.greet();
var paul = {
    name: 'paul',
    greet: john.greet
};
paul.greet();
