import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input() count: number = 0;
  textToDisplay: number = 0;
  constructor() { }
  ngOnInit(): void {
    let interval = setInterval(() => {
      if (this.count > this.textToDisplay)
        this.textToDisplay = this.textToDisplay + (this.count / 500);
      else {
        this.textToDisplay = this.count;
        clearInterval(interval)
      }
    }, 1)

  }

}
