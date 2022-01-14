import { Component, OnInit } from '@angular/core';
import {MonthlyBalanceService} from "../../services/monthly-balance.service";

@Component({
  selector: 'app-monthly-balance',
  templateUrl: './monthly-balance.component.html',
  styleUrls: []
})
export class MonthlyBalanceComponent implements OnInit {

  public monthlyBalance$ = this.monthlyBalanceService.monthlyBalance$;

  constructor(private monthlyBalanceService: MonthlyBalanceService) { }

  ngOnInit(): void {
  }

}
