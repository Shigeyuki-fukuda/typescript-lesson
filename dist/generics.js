"use strict";
// ジェネリクスの例: T は type として一般的に用いられる
// これを使うことで汎用的な関数を作ることが可能
function copy(value, key) {
    console.log(value[key]);
    return value;
}
console.log(copy({ name: 'John', age: 38 }, 'age'));
// クラスに対してジェネリクスを使用する例
var LightDatabase = /** @class */ (function () {
    function LightDatabase() {
        this.data = [];
    }
    LightDatabase.prototype.add = function (item) {
        this.data.push(item);
    };
    ;
    LightDatabase.prototype.remove = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    ;
    LightDatabase.prototype.get = function () {
        return this.data;
    };
    ;
    return LightDatabase;
}());
var stringLightDatabase = new LightDatabase();
stringLightDatabase.add('apple');
stringLightDatabase.add('banana');
console.log(stringLightDatabase.get());
var numberLightDatabase = new LightDatabase();
numberLightDatabase.add(99);
console.log(numberLightDatabase.get());
var tmpDatabase = {
    id: 1,
    data: [12]
};
var typeDatabase = {
    id: 2,
    data: ['type']
};
