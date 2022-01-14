import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../../models/payment';
import { PaymentsService } from '../../services/payments.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: [],
})
export class PaymentsComponent implements OnInit {
  public payments$: Observable<Payment[]> = this.paymentsService.payments$;

  constructor(private paymentsService: PaymentsService) {}

  ngOnInit(): void {}
}
