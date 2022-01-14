import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpenseView } from '../../models/expenses';
import { RecentExpensesService } from '../../services/recent-expenses.service';
import { expenseIconMapping } from '../../utils/expense-icon-mapping';

@Component({
  selector: 'app-recent-expenses',
  templateUrl: './recent-expenses.component.html',
  styleUrls: [],
})
export class RecentExpensesComponent implements OnInit {
  displayedColumns: string[] = ['title', 'date', 'amount', 'options'];

  public dataSource$: Observable<ExpenseView[]> =
    this.recentExpensesService.dataSource$;

  public expenseIconMapping = expenseIconMapping;

  constructor(private recentExpensesService: RecentExpensesService) {}

  ngOnInit(): void {}
}
