function logText<T>(text: T): T {
  console.log(text);
  return text;  
}

const num = logText<number>(10);
const str = logText<string>('abc');
str.split('');

const flag = logText<boolean>(true);

// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<number> = { value: 1, selected: false };