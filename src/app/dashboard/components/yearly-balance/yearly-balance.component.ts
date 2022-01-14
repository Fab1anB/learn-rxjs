import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
@Component({
  selector: 'app-yearly-balance',
  templateUrl: './yearly-balance.component.html',
  styleUrls: [],
})
export class YearlyBalanceComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
