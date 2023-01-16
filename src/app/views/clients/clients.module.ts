import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { ClientsRoutes } from './clients.routing';

@NgModule({
  declarations: [ClientsComponent],
  imports: [CommonModule, ClientsRoutes],
})
export class ClientsModule {}
