// ES5以前にクラスを作る方法としてあったコンストラクタ関数のES6以降版のシンタックスシュガー
class Person {
  name: string;
  constructor(initName: string) {
    this.name = initName;
  }
}
const john = new Person('John');
console.log(john);