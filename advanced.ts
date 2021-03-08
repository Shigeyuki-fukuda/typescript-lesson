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
  speak() {
    console.log('bow-wow!!!');
  }
}
class Bird {
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
  if (pet instanceof Bird) {
    pet.fly();
  }
}
havePet(new Bird());