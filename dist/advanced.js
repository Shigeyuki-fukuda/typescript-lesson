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
    }
    Dog.prototype.speak = function () {
        console.log('bow-wow!!!');
    };
    return Dog;
}());
var Bird = /** @class */ (function () {
    function Bird() {
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
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird());
