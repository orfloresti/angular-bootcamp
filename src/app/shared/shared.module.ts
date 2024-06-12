import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchInputComponent } from './navbar/search-input/search-input.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SearchInputComponent,
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
