interface Human {
  name: string,
  age: number,
  greet(message: string): void;
}
class Developer implements Human {
  constructor(public name: string, public age: number) {}
  greet(message: string) {
    console.log(message);
  }
}