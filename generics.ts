// ジェネリクスの例: T は type として一般的に用いられる
// これを使うことで汎用的な関数を作ることが可能
function copy<T>(value: T): T {
  return value;
}
console.log(copy<string>('hello'));