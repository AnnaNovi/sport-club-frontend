import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../ui/material.module';
import { UIModule } from '../ui/ui.module';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main.routing';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, UIModule, MaterialModule],
  providers: [],
})
export class MainModule {}
