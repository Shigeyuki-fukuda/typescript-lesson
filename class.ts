// ES5以前にクラスを作る方法としてあったコンストラクタ関数のES6以降版のシンタックスシュガー
class Person {
  name: string;
  private age: number;

  constructor(initName: string, initAge: number) {
    this.name = initName;
    this.age = initAge;
  }
  increment_age() {
    this.age += 1;
  }
  greet(this: Person) {
    console.log(`Hello! My name is ${this.name}!! I am ${this.age} years old!!!`);
  }
}

const john: Person = new Person('John', 40);
john.increment_age();
john.greet();