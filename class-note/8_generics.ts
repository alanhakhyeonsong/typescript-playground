function logText<T>(text: T): T {
  console.log(text);
  return text;  
}

const num = logText<number>(10);
const str = logText<string>('abc');
str.split('');

const flag = logText<boolean>(true);