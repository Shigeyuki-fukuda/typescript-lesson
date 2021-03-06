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
// Literal型 を Union型と組み合わせて使う例
var clothSize = 'small';
console.log(clothSize);
var cloth = {
    color: 'white',
    size: 'medium'
};
console.log(cloth);
