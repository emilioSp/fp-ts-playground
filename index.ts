import { pipe, flow } from 'fp-ts/function';

function add1(num: number): number {
  return num + 1;
}

function multiply2(num: number): number {
  return num * 2;
}

function toString(num: number): string {
  return num.toString();
}

function concat(num: number, transformer: (num: number) => string) {
  return [num, transformer(num)];
}

const result = concat(1, flow(add1, multiply2, toString));
console.log(result);

const x = pipe(1, flow(add1, multiply2), flow(add1, multiply2, toString));
console.log(x);
