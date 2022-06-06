import { Component, OnInit } from '@angular/core';
import { Hero } from '../../model/hero';
import { HeroService } from 'src/app/services/hero-service/hero.service';
import { MessageService } from 'src/app/services/message-service/message.service';

// @Component is a decorator function that specifies the Angular metadata for the component.

@Component({
  selector: 'app-heroes', //The component's CSS element selector.
  templateUrl: './heroes.component.html', //The location of the component's template file or you could use template property 
  styleUrls: ['./heroes.component.css'], //The location of the component's private CSS styles.
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  selectedHero?: Hero;

  constructor(private heroService: HeroService,
    private messageService: MessageService) { }

  // lifecycle hook.. its called after component is created
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService
    .getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
