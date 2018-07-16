import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,

  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngDoCheck() {
    // tslint:disable-next-line:max-line-length
    // Called every time that the input properties of a component or a directive are checked.
    // Use it to extend change detection by performing a custom check.
    // Add 'implements DoCheck' to the class.
    console.log(this.hero);

  }

}
