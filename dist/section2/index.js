"use strict";
var hasValue = true;
var count = 12;
var float = 3.14;
var negative = -1;
var single = 'hello';
var double = "hello";
var back = "hello";
// objectに型を付ける例
var person = {
    name: 'Jack',
    age: 21
};
// TypeScriptの型推論に任せた例
// const person = {
//   name: 'Jack',
//   age: 21
// }
console.log(person);
// 配列に型を付ける例
var fruits = ['Apple', 'Banana', 'Grape'];
console.log(fruits);
// Tuple型の例
var book = ['business', 1500, false];
console.log(book);
// Enum型の例
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.GRANDE;
console.log(coffee);
// Union型の例
var unionType = 10;
console.log(unionType);
var unionTypes = [1, 2, '3'];
console.log(unionTypes);
// Literal型(特定の決まった値のみを扱う型)の例
var apple = 'apple';
console.log(apple);
var clothSize = 'small';
console.log(clothSize);
var cloth = {
    color: 'white',
    size: 'medium'
};
console.log(cloth);
// 関数に型を付ける例
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(1, 2));
// 関数の戻り値をvoid型にした例
function sayHello() {
    console.log('Hello');
}
sayHello();
// 関数を保持する変数に型を付ける例
var anotherSum = sum;
// 無名関数の場合
// const anotherSum: (num1: number, num2: number) => number = function (num1, num2) {
//   return num1 + num2;
// }
console.log(anotherSum(2, 3));
// アロー関数の場合
// const doubleNumber = (num: number): number => num * 2;
var doubleNumber = function (num) { return num * 2; };
console.log(doubleNumber(2));
// callback関数に型を付ける例
function doubleandHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(num * 2, doubleNum);
}
doubleandHandle(10, function (doubleNumber) { return doubleNumber; });
// never型の例
function error(message) {
    throw new Error(message);
}
console.log(error('This is an error!!!'));
