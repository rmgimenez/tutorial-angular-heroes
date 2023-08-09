import { Injectable } from '@angular/core';
import { HeroInterface } from './hero.interface';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  getHeroes(): Observable<HeroInterface[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
