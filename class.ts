// ES5以前にクラスを作る方法としてあったコンストラクタ関数のES6以降版のシンタックスシュガー
class Person {
  name: string;

  constructor(initName: string) {
    this.name = initName;
  }

  greet(this: Person) {
    console.log(`Hello! My name is ${this.name}!!`);
  }
}

const john: Person = new Person('John');
john.greet();

const paul = {
  name: 'paul',
  greet: john.greet
}
paul.greet();