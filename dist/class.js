"use strict";
// ES5以前にクラスを作る方法としてあったコンストラクタ関数のES6以降版のシンタックスシュガー
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.increment_age = function () {
        this.age += 1;
    };
    Person.prototype.greet = function () {
        console.log("Hello! My name is " + this.name + "!! I am " + this.age + " years old!!!");
    };
    return Person;
}());
var john = new Person('John', 40);
john.increment_age();
john.greet();
