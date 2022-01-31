import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root',
})
export class PaymentsService {
  private url = 'http://localhost:4200/profits';

  public payments$ = this.getPayments().pipe(
    map((payments) =>
      payments.filter((payment) => payment.month === new Date().getMonth())
    )
  );

  constructor(private http: HttpClient) {}

  public getPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.url);
  }
}
