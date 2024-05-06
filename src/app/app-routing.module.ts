import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyComponent } from './components/my-component/my-component.component';
import { SlugComponent } from './components/slug/slug.component';

const routes: Routes = [
  {
    path: 'my-component',
    component: MyComponent,
  },
  {
    path: 'lazy-route',
    loadChildren: () => import('./module-lazy/module-lazy.module').then(m => m.ModuleLazyModule),
  },
  {
    path: 'slug/:slug',
    component: SlugComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
