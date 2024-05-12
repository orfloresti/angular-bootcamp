import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const appRoutes: Routes = [
  {
    path: 'a',
    loadChildren: () => import('./modules-components-routes/a/a.module').then(m => m.AModule),
  },
  {
    path: 'b',
    loadChildren: () => import('./modules-components-routes/b/b.module').then(m => m.BModule),
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
