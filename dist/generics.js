"use strict";
// ジェネリクスの例: T は type として一般的に用いられる
// これを使うことで汎用的な関数を作ることが可能
function copy(value, key) {
    console.log(value[key]);
    return value;
}
console.log(copy({ name: 'John', age: 38 }, 'age'));
