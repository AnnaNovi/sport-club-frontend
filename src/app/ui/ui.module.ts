import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MaterialModule } from './material.module';

const UI = [MenuItemComponent];

@NgModule({
  declarations: [...UI],
  imports: [CommonModule, MaterialModule],
  exports: [...UI, MaterialModule],
})
export class UIModule {}
