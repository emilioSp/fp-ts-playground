import { pipe } from 'fp-ts/function';

function add1(num: number): number {
  return num + 1;
}

function multiply2(num: number): number {
  return num * 2;
}

function toString(num: number): string {
  return num.toString();
}

const result = pipe(1, add1, multiply2, toString);
console.log(result);
