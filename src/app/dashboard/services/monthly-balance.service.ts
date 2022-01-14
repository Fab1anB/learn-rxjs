import { Injectable } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { SharePriceService } from './share-price.service';
import { PaymentsService } from './payments.service';
import { RecentExpensesService } from './recent-expenses.service';
import { Share } from '../models/share';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root',
})
export class MonthlyBalanceService {
  public monthlyBalance$ = combineLatest([
    combineLatest([
      this.sharePriceService.sharePrice$,
      this.paymentsService.payments$,
    ]).pipe(
      map(([shares, payments]) =>
        shares // cumulate income shares + payments
          .map((share: Share) => share.value)
          .concat(payments.map((payment: Payment) => payment.value))
          .reduce((acc, curr) => acc + curr, 0)
      )
    ),
    this.recentExpensesService.recentExpenses$.pipe(
      map((expenses) =>
        expenses
          .filter((expense) => {
            return new Date(expense.date).getMonth() === new Date().getMonth();
          })
          .map((expense) => {
            return expense.amount;
          })
          .reduce((acc, curr) => acc + curr, 0)
      )
    ),
  ]).pipe(map(([income, expenses]) => +(income - expenses).toFixed(0)));

  constructor(
    private sharePriceService: SharePriceService,
    private paymentsService: PaymentsService,
    private recentExpensesService: RecentExpensesService
  ) {}
}
