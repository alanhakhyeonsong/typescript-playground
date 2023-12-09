function logMessage(value: string | number) {
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  someone.name;
}
askSomeone({ name: '라모스', skill: '백엔드' });
askSomeone({ name: '라모스', age: 28 });

function askSomeone2(someone: Developer & Person) {
  someone.name;
  someone.skill;
  someone.age;
}
askSomeone2({ name: '라모스', skill: '백엔드', age: 28 });