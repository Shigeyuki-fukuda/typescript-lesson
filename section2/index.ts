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

// Enum型の例
enum CoffeeSize {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
}
const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}
coffee.size = CoffeeSize.GRANDE;
console.log(coffee);

// Union型の例
let unionType: number | string = 10;
console.log(unionType);
let unionTypes: (number | string)[] = [1,2,'3'];
console.log(unionTypes);

// Literal型(特定の決まった値のみを扱う型)の例
const apple: 'apple' = 'apple';
console.log(apple);

// Literal型 を Union型と組み合わせて使う例
const clothSize: 'small' | 'medium' | 'large' = 'small';
console.log(clothSize);
const cloth: {
  color: string;
  size: 'small' | 'medium' | 'large'
} = {
  color: 'white',
  size: 'medium'
}
console.log(cloth);