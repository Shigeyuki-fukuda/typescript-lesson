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