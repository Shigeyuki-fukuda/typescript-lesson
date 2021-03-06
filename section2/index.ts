let hasValue: boolean = true;
let count: number = 12;
let float: number = 3.14;
let negative: number = -1;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

// objectに型を付ける例
const person: {
  name: string;
  age: number;
} = {
  name: 'Jack',
  age: 21
}
// TypeScriptの型推論に任せた例
// const person = {
//   name: 'Jack',
//   age: 21
// }
console.log(person);

// 配列に型を付ける例
const fruits: string[] = ['Apple', 'Banana', 'Grape'];
console.log(fruits);

// Tuple型の例
const book: [string, number, boolean] = ['business', 1500, false];
console.log(book);