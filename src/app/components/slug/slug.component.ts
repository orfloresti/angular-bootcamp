import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-slug',
  templateUrl: './slug.component.html',
  styleUrl: './slug.component.scss'
})
export class SlugComponent implements OnInit, OnDestroy {
  subscription$: Subscription = new Subscription();
  slug: string = '';

  constructor(readonly activatedRoute: ActivatedRoute) { }

  setSlug = (params: Params) => this.slug = params['slug'];

  ngOnInit(): void {
    this.subscription$.add(
      this.activatedRoute.params.subscribe(this.setSlug)
    );
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
