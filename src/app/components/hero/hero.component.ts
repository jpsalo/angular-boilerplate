import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '~interfaces/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  @Input() hero: Hero;

  constructor() {}

  ngOnInit(): void {}
}
