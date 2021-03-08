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