// ES5以前にクラスを作る方法としてあったコンストラクタ関数のES6以降版のシンタックスシュガー
class Person {
  constructor(public name: string, protected age: number) {}
  increment_age() {
    this.age += 1;
  }
  greet(this: Person) {
    console.log(`Hello! My name is ${this.name}!! I am ${this.age} years old!!!`);
  }
}

class Teacher extends Person {
  private static instance: Teacher;
  private constructor(name: string, age: number, public subject: string) {
    super(name, age);
  }
  static getInstance() {
    if (Teacher.instance) return Teacher.instance;
    Teacher.instance = new Teacher('George', 58, 'Music');
    return Teacher.instance;
  }
  greet() {
    console.log(`Hello! My name is ${this.name}!! I am ${this.age} years old!!! I teach ${this.subject}!!!!`);
  }
}
const teacher = Teacher.getInstance();
teacher.greet();