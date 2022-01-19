import { Injectable } from '@angular/core';
import { map, Observable, scan, switchMap, tap, timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Share, ShareView } from '../models/share';
import { log10 } from 'chart.js/helpers';

@Injectable({
  providedIn: 'root',
})
export class SharePriceService {
  private url = 'http://localhost:4200/shares-live';

  public sharePrice$: Observable<Share[]> = timer(0, 5_000).pipe(
    switchMap(() => this.getSharePrice())
  );

  public shareViews$: Observable<ShareView[]> = this.sharePrice$.pipe(
    scan((acc: Share[][], curr) => {
      acc.push(curr);
      return acc;
    }, []),
    map((sharesList) => {
      const dayStartValues = sharesList[0];
      const currentValues = sharesList[sharesList.length - 1];
      return calculateShareViewValues(dayStartValues, currentValues);
    }),
  );

  constructor(private http: HttpClient) {}

  public getSharePrice(): Observable<Share[]> {
    return this.http.get<Share[]>(this.url);
  }
}

function calculateShareViewValues(
  dayStartValues: Share[],
  currentValues: Share[]
) {
  return currentValues.reduce((acc: ShareView[], curr) => {
    const startValueOfAShare = dayStartValues.find(
      (share) => share.wkn === curr.wkn
    );
    const shareView: ShareView = {
      ...curr,
      diff:
        +((curr.value - (startValueOfAShare?.value ?? 0)) /
        (startValueOfAShare?.value ?? 1)).toFixed(2),
    };
    acc.push(shareView);
    return acc;
  }, [] as ShareView[]);
}
