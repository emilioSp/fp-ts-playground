import { pipe } from "fp-ts/function";
import * as O from "fp-ts/lib/Option";
import * as A from "fp-ts/lib/Array";

function ComputeWithFpts(array: number[]): string {
  return pipe(
    A.head(array),
    O.map(n => n * 2),
    // O.chain(n => (n === 0 ? O.none : O.some(1 / n))),
    O.filter(n => n > 1),
    O.fold(
      () => "ko",
      (result) => `the result is: ${result}`
    )
  );
}

console.log(ComputeWithFpts([3]));
