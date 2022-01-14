import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Expense } from '../models/expenses';

@Injectable({
  providedIn: 'root',
})
export class RecentExpensesService {
  private url = 'http://localhost:4200/expenses';

  public recentExpenses$: Observable<Expense[]> = this.getExpenses();

  public dataSource$ = this.recentExpenses$.pipe(
    map((expenses) =>
      expenses.map((expense: Expense) => {
        return {
          ...expense,
          date: new Date(expense.date).toLocaleDateString(),
        };
      })
    )
  );

  constructor(private http: HttpClient) {}

  public getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.url);
  }
}
