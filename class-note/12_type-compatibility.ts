// 인터페이스
interface Developer1 {
  name: string;
  skill: string;
}

// interface Person2 {
//   name: string;
//   // skill: string;
// }

class Person2 {
  name: string;
  skill: string;
}

let developer: Developer1;
let person: Person2;
developer = new Person2();
// developer = person2;
// person = developer1;

// 함수
let add = function(a: number) {
  // ...
}

let sum = function(a: number, b: number) {
  // ...
}

// add = sum;
sum = add;

// 제네릭
interface Empty<T> {
  // ...
}
let empty1: Empty<string>;
let empty2: Empty<number>;

interface NotEmpty<T> {
  data: T;
}
let notEmpty1: NotEmpty<string>;
let notEmpty2: NotEmpty<number>;

notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;