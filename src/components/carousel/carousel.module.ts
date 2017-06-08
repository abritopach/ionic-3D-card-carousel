import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarouselComponent } from './carousel';

@NgModule({
  declarations: [
    CarouselComponent,
  ],
  imports: [
    IonicPageModule.forChild(CarouselComponent),
  ],
  exports: [
    CarouselComponent
  ]
})
export class CarouselComponentModule {}
