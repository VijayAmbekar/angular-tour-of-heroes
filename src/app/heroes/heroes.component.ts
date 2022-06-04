import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';

// @Component is a decorator function that specifies the Angular metadata for the component.

@Component({
  selector: 'app-heroes', //The component's CSS element selector.
  templateUrl: './heroes.component.html', //The location of the component's template file or you could use template property 
  styleUrls: ['./heroes.component.css'], //The location of the component's private CSS styles.
})
export class HeroesComponent implements OnInit {

  hero : Hero = {
    id: 1,
    name: 'Black Widow'
  };

  constructor() { }

  // lifecycle hook.. its called after component is created
  ngOnInit(): void {
  }

}
