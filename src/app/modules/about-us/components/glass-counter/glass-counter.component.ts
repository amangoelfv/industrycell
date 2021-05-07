import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-glass-counter',
  templateUrl: './glass-counter.component.html',
  styleUrls: ['./glass-counter.component.scss']
})
export class GlassCounterComponent implements OnInit {
  @Input() count: any;
  @Input() title: any;
  constructor() { }

  ngOnInit(): void {
  }

}
