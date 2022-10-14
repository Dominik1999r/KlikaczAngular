import { LogService } from './services/log.service';
import { SumClicksService } from './services/sum-clicks.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [SumClicksService, LogService],
})
export class AppComponent {
  title = 'serwisy';

  clicks: number = 0;

  constructor(private sumClicksService: SumClicksService) {}

  ngOnInit() {
    this.sumClicksService.sumClicks.subscribe((dane) => (this.clicks = dane));
  }
}
