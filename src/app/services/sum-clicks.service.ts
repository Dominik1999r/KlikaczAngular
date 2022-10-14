import { LogService } from './log.service';
import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SumClicksService {
  clicks: number = 0;

  sumClicks = new Subject<number>();

  add() {
    this.clicks += 1;
    this.sumClicks.next(this.clicks);
    console.log(this.clicks);
    this.log.logger('Kliknięcie!');
  }

  getSum(): Observable<number> {
    return this.sumClicks.asObservable();
  }

  constructor(private log: LogService) {}
}
