import { SumClicksService } from '../services/sum-clicks.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click2',
  templateUrl: './click2.component.html',
  styleUrls: ['./click2.component.css'],
})
export class Click2Component implements OnInit {
  constructor(private sumClicksService: SumClicksService) {}

  clicks: number = 0;

  add() {
    this.clicks += 1;
    this.sumClicksService.add();
  }

  ngOnInit(): void {}
}
