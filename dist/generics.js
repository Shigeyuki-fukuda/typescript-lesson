"use strict";
// ジェネリクスの例: T は type として一般的に用いられる
// これを使うことで汎用的な関数を作ることが可能
function copy(value, key) {
    console.log(value[key]);
    return value;
}
console.log(copy({ name: 'John', age: 38 }, 'age'));
// クラスに対してジェネリクスを使用する例
class LightDatabase {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    ;
    remove(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    ;
    get() {
        return this.data;
    }
    ;
}
const stringLightDatabase = new LightDatabase();
stringLightDatabase.add('apple');
stringLightDatabase.add('banana');
console.log(stringLightDatabase.get());
const numberLightDatabase = new LightDatabase();
numberLightDatabase.add(99);
console.log(numberLightDatabase.get());
const tmpDatabase = {
    id: 1,
    data: [12]
};
const typeDatabase = {
    id: 2,
    data: ['type']
};
const fetchData = new Promise(resolve => {
    setTimeout(() => {
        resolve('success');
    }, 3000);
});
fetchData.then(data => {
    data.toUpperCase();
});
const vegetables = ['Tomato', 'Broccoli', 'Asparagus'];
