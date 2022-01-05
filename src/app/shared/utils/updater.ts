import {
  combineLatestWith,
  map,
  MonoTypeOperatorFunction,
  Observable,
  startWith,
} from 'rxjs';

export function updater<T>(
  updater$: Observable<void>
): MonoTypeOperatorFunction<T> {
  return (source) =>
    source.pipe(
      combineLatestWith(updater$.pipe(startWith(null))),
      map(([a, _]) => a)
    );
}
