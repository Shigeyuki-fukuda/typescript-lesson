"use strict";
// ES5以前にクラスを作る方法としてあったコンストラクタ関数のES6以降版のシンタックスシュガー
var Person = /** @class */ (function () {
    function Person(initName) {
        this.name = initName;
    }
    return Person;
}());
var john = new Person('John');
console.log(john);
