import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss'],
})
export class CaseComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  name: string;

  ngOnInit(): void {
    this.name = this.getCase();
  }

  getCase(): string {
    const name = this.route.snapshot.paramMap.get('name');
    return name;
  }
}
