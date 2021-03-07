"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, subject) {
        var _this = _super.call(this, name, age) || this;
        _this.subject = subject;
        return _this;
    }
    Teacher.getInstance = function () {
        if (Teacher.instance)
            return Teacher.instance;
        Teacher.instance = new Teacher('George', 58, 'Music');
        return Teacher.instance;
    };
    Teacher.prototype.greet = function () {
        console.log("Hello! My name is " + this.name + "!! I am " + this.age + " years old!!! I teach " + this.subject + "!!!!");
    };
    return Teacher;
}(Person));
var teacher = Teacher.getInstance();
teacher.greet();
