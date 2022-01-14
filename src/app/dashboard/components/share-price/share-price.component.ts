import { Component, OnInit } from '@angular/core';
import { mapTo, Observable, scan } from 'rxjs';
import { SharePriceService } from '../../services/share-price.service';
import { Share } from '../../models/share';

@Component({
  selector: 'app-share-price',
  templateUrl: './share-price.component.html',
  styleUrls: [],
})
export class SharePriceComponent implements OnInit {
  displayedColumns: string[] = ['share', 'value'];

  public dataSource$: Observable<Share[]> = this.sharePriceService.sharePrice$;

  constructor(public sharePriceService: SharePriceService) {}

  ngOnInit(): void {}
}
