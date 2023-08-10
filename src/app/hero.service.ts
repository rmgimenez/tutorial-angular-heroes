import { Injectable } from '@angular/core';
import { HeroInterface } from './hero.interface';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<HeroInterface[]> {
    const heroes = of(HEROES);
    this.messageService.addMessage('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<HeroInterface> {
    const hero = HEROES.find((h) => h.id === id)!;
    this.messageService.addMessage(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
