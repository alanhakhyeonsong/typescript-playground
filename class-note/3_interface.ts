interface User {
  name: string;
  age: number;
}

// 변수에 인터페이스 활용
let ramos: User = {
  name: 'Ramos',
  age: 28
};

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}

getUser(ramos);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction;
sum = function(a: number, b: number): number {
  return a + b;
}

// 인덱싱
interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ['a', 'b', 'c'];
arr[0];

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

Object.keys(obj).forEach(function (value) {});

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

let hakhyeon: Developer = {
  language: 'java',
  age: 28,
  name: 'Ramos'
};
