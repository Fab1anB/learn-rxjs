import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpenseView } from '../../models/expenses';
import { RecentExpensesService } from '../../services/recent-expenses.service';
import { expenseIconMapping } from '../../utils/expense-icon-mapping';
import { MONTHS } from '../../constants/months.constant';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-recent-expenses',
  templateUrl: './recent-expenses.component.html',
  styleUrls: [],
})
export class RecentExpensesComponent implements OnInit {
  public displayedColumns: string[] = ['title', 'date', 'amount', 'options'];

  public months = MONTHS;

  public dataSource$: Observable<ExpenseView[]> =
    this.recentExpensesService.dataSource$;

  public expenseIconMapping = expenseIconMapping;

  constructor(public recentExpensesService: RecentExpensesService) {}

  ngOnInit(): void {}

  public onMonthSelected(event: MatSelectChange) {
    this.recentExpensesService.onMonthSelected$.next(event.source.value);
  }

  public onDeleteExpense(expenseView: ExpenseView) {
    this.recentExpensesService.deleteExpense.next(expenseView)
  }

  public onAddExpense(): void {}
}
