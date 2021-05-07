import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { AboutUsRoutingModule } from './about-us.routing';
import { CounterComponent } from 'src/app/components/counter/counter.component';
import { GlassCounterComponent } from './components/glass-counter/glass-counter.component';



@NgModule({
  declarations: [
    AboutUsComponent,
    CounterComponent,
    GlassCounterComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
  ]
})
export class AboutUsModule { }
