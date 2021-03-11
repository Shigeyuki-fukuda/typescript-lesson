"use strict";
// ES5以前にクラスを作る方法としてあったコンストラクタ関数のES6以降版のシンタックスシュガー
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    increment_age() {
        this.age += 1;
    }
    greet() {
        console.log(`Hello! My name is ${this.name}!! I am ${this.age} years old!!!`);
    }
}
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    static getInstance() {
        if (Teacher.instance)
            return Teacher.instance;
        Teacher.instance = new Teacher('George', 58, 'Music');
        return Teacher.instance;
    }
    greet() {
        console.log(`Hello! My name is ${this.name}!! I am ${this.age} years old!!! I teach ${this.subject}!!!!`);
    }
}
const teacher = Teacher.getInstance();
teacher.greet();
