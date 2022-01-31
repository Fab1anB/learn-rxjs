import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  filter,
  map,
  Observable,
  startWith,
  Subject,
  switchMap,
} from 'rxjs';
import { Expense, ExpenseView } from '../models/expenses';
import { MONTHS } from '../constants/months.constant';

@Injectable({
  providedIn: 'root',
})
export class RecentExpensesService {
  private url = 'http://localhost:4200/expenses';

  public deleteExpense = new Subject<ExpenseView>();

  private deleteExpense$ = this.deleteExpense
    .asObservable()
    .pipe(switchMap((expenseView) => this.deleteExpenses(expenseView)));

  public recentExpenses$: Observable<Expense[]> = this.deleteExpense$.pipe(
    startWith(null),
    switchMap(() => this.getExpenses())
  );

  public onMonthSelected$ = new BehaviorSubject('January');

  public dataSource$ = combineLatest([
    this.recentExpenses$,
    this.onMonthSelected$.pipe(
      map((selectedMonth) => MONTHS.indexOf(selectedMonth))
    ),
  ]).pipe(
    map(([expenses, selectedMonth]) => {
      return expenses
        .filter(
          (expense: Expense) =>
            new Date(expense.date).getMonth() === selectedMonth
        )
        .map((expense: Expense) => {
          return {
            ...expense,
            date: new Date(expense.date).toLocaleDateString(),
          };
        });
    })
  );

  constructor(private http: HttpClient) {}

  public getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.url);
  }

  public deleteExpenses(expenseView: ExpenseView): Observable<void> {
    return this.http.delete<void>(this.url, { body: expenseView });
  }
}
