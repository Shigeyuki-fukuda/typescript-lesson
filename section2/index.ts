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