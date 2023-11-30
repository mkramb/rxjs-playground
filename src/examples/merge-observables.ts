import { filter, from, merge, share, tap } from 'rxjs';

const data = from([1, 2, 3, 4]);

const isEven$ = data.pipe(
  filter((value) => value % 2 === 0),
  tap((value) => console.log(`even number: ${value}`)),
);

const isOdd$ = data.pipe(
  filter((value) => value % 2 !== 0),
  tap((value) => console.log(`odd number: ${value}`)),
);

export const mergedObservable = merge(isEven$, isOdd$);
