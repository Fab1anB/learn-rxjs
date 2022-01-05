import {
  MonoTypeOperatorFunction,
  Observable,
  OperatorFunction,
  tap,
} from 'rxjs';

export function logObservable<T>(prefix = 'emit'): MonoTypeOperatorFunction<T> {
  return (source) =>
    source.pipe(tap((data) => console.log(`${prefix}: `, data)));
}
