import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'clients',
        pathMatch: 'full',
      },
      {
        path: 'clients',
        loadChildren: () =>
          import('./clients/clients.module').then((m) => m.ClientsModule),
      },
      {
        path: '**',
        loadChildren: () =>
          import('./not-found/not-found.module').then((m) => m.NotFoundModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
