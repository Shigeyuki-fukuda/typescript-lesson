interface Engineer {
  name: string;
  role: string;
}
interface Blogger {
  name: string;
  follower: number;
}
// &を用いたインターセクション型の例
// type EngineerBlogger = Engineer & Blogger;
interface EngineerBlogger extends Engineer, Blogger {} // 末尾に空のオブジェクトが必要なので {} も書いている

const quil: EngineerBlogger = {
  name: 'Quil',
  role: 'front-end-engineer',
  follower: 1000
}
console.log(quil);

// 複数の型を組み合わせたUnion型の例
type NumberBoolean = number | boolean;
type StringNumber = string | number;
// 2つの型の重なる部分が number なので type Mixの型推論結果は number になる
type Mix = NumberBoolean & StringNumber;

// 条件文を使って型を絞り込む Type guard の例1
function toUpperCase(x: string | number) {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
  return '';
}
// Type guardの例2
type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
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
  kind: 'dog' = 'dog'; // タグ
  speak() {
    console.log('bow-wow!!!');
  }
}
class Bird {
  kind: 'bird' = 'bird'; // タグ
  speak() {
    console.log('tweet-tweet');
  }
  fly() {
    console.log('flutter');
  }
}
type Pet = Dog | Bird;
function havePet(pet: Pet) {
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
const a: string | null = null;
const x: string = a!;
console.log(x);

// インデックスシグネチャの例
interface Designer {
  name: string;
  [index: string]: string;
}
const designer: Designer = {
  name: 'Quill',
  role: 'leader'
}
console.log(designer);

// レストパラメータを使って配列を指定する例
// function advancedFunc(...args: number[]) {
//   console.log(args);
// }

// レストパラメータを使ってTupleを指定する例
// Tupleでも引数の末尾に?を付けるとオプショナルな引数になる
function advancedFunc(...args: [number, string, boolean?]) {
  console.log(args);
}
advancedFunc(1,'2');