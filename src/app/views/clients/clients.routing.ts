import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './clients.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
  },
];

export const ClientsRoutes = RouterModule.forChild(routes);
