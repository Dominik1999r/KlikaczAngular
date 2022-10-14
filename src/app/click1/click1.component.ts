import { SumClicksService } from '../services/sum-clicks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click1',
  templateUrl: './click1.component.html',
  styleUrls: ['./click1.component.css'],
})
export class Click1Component implements OnInit {
  constructor(private sumClicksService: SumClicksService) {}

  clicks: number = 0;

  add() {
    this.clicks += 1;
    this.sumClicksService.add();
  }
  ngOnInit(): void {}
}
