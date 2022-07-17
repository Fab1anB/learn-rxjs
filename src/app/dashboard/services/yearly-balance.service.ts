import { Injectable } from '@angular/core';
import {from, map, mergeMap, Observable, reduce, scan, startWith, switchMap} from 'rxjs';
import { groupBy } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { PaymentsService } from './payments.service';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root',
})
export class YearlyBalanceService {
  private url = 'http://localhost:4200/shares-live';

  constructor(
    private http: HttpClient,
    private paymentsService: PaymentsService
  ) {
    this.paymentsByMonth$.subscribe((xx) => console.log('XXXXX: ', xx));
  }

  public paymentsByMonth$ = from(this.paymentsService.getPayments()).pipe(
    switchMap((payments) => payments),
    groupBy((payment) => payment.month),
    mergeMap((group$) =>
      group$.pipe(
        scan(
          (accumulator, current) => ({
            month: current.month,
            value: accumulator.value + current.value,
          }),
          { month: 0, value: 0 }
        )
      )
    )
  );

  public monthLabels$: any = this.paymentsByMonth$.pipe(
    map(data => data.month),
    startWith([]),
  );
}
