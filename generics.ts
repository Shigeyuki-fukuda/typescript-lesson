// ジェネリクスの例: T は type として一般的に用いられる
// これを使うことで汎用的な関数を作ることが可能
function copy<T extends { name: string }, U extends keyof T>(value: T, key: U): T {
  console.log(value[key]);
  return value;
}
console.log(copy({ name: 'John', age: 38 }, 'age'));

// クラスに対してジェネリクスを使用する例
class LightDatabase<T extends string | number | boolean> {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  };
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1)
  };
  get() {
    return this.data;
  };
}
const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add('apple');
stringLightDatabase.add('banana');
console.log(stringLightDatabase.get());

const numberLightDatabase = new LightDatabase<number>();
numberLightDatabase.add(99);
console.log(numberLightDatabase.get());