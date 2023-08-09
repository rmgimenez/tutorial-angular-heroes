import { Component, OnInit } from '@angular/core';
import { HeroInterface } from '../hero.interface';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: HeroInterface[] = [];
  selectedHero?: HeroInterface;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: HeroInterface): void {
    this.selectedHero = hero;
    this.messageService.addMessage(
      `HeroesComponent: Selected hero id=${hero.id} / name=${hero.name}`
    );
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
