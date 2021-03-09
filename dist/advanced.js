"use strict";
var quil = {
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
var Dog = /** @class */ (function () {
    function Dog() {
        this.kind = 'dog'; // タグ
    }
    Dog.prototype.speak = function () {
        console.log('bow-wow!!!');
    };
    return Dog;
}());
var Bird = /** @class */ (function () {
    function Bird() {
        this.kind = 'bird'; // タグ
    }
    Bird.prototype.speak = function () {
        console.log('tweet-tweet');
    };
    Bird.prototype.fly = function () {
        console.log('flutter');
    };
    return Bird;
}());
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
var a = null;
var x = a;
console.log(x);
var designer = {
    name: 'Quill',
    role: 'leader'
};
console.log(designer);
