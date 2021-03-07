interface Human {
  name: string,
  age: number,
  greet(message: string): void;
}
class Developer implements Human {
  constructor(public name: string, public age: number) {}
  greet(message: string) {
    console.log(message);
  }
}
// 関数の型をinterfaceで書いた例
interface addFunc {
  (num1: number, num2: number): number;
}
let addFunc: addFunc;
addFunc = (num1: number, num2: number) => {
  return num1 + num2;
}
console.log(addFunc(1, 2));