interface Human {
  name: string,
  age: number,
  greet(message: string): void;
}
const human: Human = {
  name: "Paul",
  age: 78,
  greet(message: string): void {
    console.log(message);
  }
}
human.greet('Yeah!!!');