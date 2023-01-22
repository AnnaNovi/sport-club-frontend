import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { HeaderComponent } from '../share/header/header.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main.routing';

@NgModule({
  declarations: [MainComponent, HeaderComponent],
  imports: [CommonModule, MainRoutingModule, MaterialModule],
  providers: [],
})
export class MainModule {}
