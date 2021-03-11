"use strict";
const quil = {
    name: 'Quil',
    role: 'front-end-engineer',
    follower: 1000
};
console.log(quil);
// 条件文を使って型を絞り込む Type guard の例1
function toUpperCase(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return '';
}
function describeProfile(nomadWorker) {
    console.log(nomadWorker);
    // nomadWorkerというオブジェクトの中に role という keyがあるのかの判定
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ('follower' in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
// Type guardの例3
class Dog {
    constructor() {
        this.kind = 'dog'; // タグ
    }
    speak() {
        console.log('bow-wow!!!');
    }
}
class Bird {
    constructor() {
        this.kind = 'bird'; // タグ
    }
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}
function havePet(pet) {
    pet.speak();
    switch (pet.kind) {
        case 'bird':
            pet.fly();
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird());
// 型アサーションの例 : JSXを使う場合はその2が推奨
// その1： <型名>
// const input = <HTMLInputElement>document.getElementById('input');
// その2： 変数 as 型名
// const input = document.getElementById('input') as HTMLInputElement;
// input.value = 'initial input value';
// (document.getElementById('input') as HTMLInputElement).value = 'initial input value';
// Non-null assertion operatorの例 ： 変数! と末尾に!を付けることで nullではないと実装者が明示出来る
const a = null;
const x = a;
console.log(x);
const designer = {
    name: 'Quill',
    role: 'leader'
};
console.log(designer);
// レストパラメータを使って配列を指定する例
// function advancedFunc(...args: number[]) {
//   console.log(args);
// }
// レストパラメータを使ってTupleを指定する例
// Tupleでも引数の末尾に?を付けるとオプショナルな引数になる
function advancedFunc(...args) {
    console.log(args);
}
advancedFunc(1, '2', 3, 4, 5);
// constアサーションの例
const array = [10, 20]; // arrayが readonly の[10, 20]となり定数のように扱うことが出来る
const peter = {
    name: 'Peter',
    age: 38
};
