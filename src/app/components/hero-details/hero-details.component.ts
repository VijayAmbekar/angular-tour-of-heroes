import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/services/hero-service/hero.service';



@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: [ './hero-details.component.css' ]
})
export class HeroDetailsComponent implements OnInit {
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}