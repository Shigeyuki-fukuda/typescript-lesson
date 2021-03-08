type Engineer = {
  name: string;
  role: string;
}
type Blogger = {
  name: string;
  follower: number;
}
// &を用いたインターセクション型の例
type EngineerBlogger = Engineer & Blogger;
const quil: EngineerBlogger = {
  name: 'Quil',
  role: 'front-end-engineer',
  follower: 1000
}
console.log(quil);