import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NotFoundComponent,
    LandingPageComponent,
    NavbarComponent,
  ],
  exports: [
    NotFoundComponent,
    LandingPageComponent,
    NavbarComponent,
  ],
})
export class SharedModule { }
