import { Component, OnInit } from '@angular/core';
import { CaseService } from '~services/case.service';
import { Case } from '~interfaces/case';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  cases: Case[];

  constructor(private caseService: CaseService) {}

  ngOnInit(): void {
    this.getCases();
  }

  getCases(): void {
    this.caseService.getCases().subscribe((cases) => (this.cases = cases));
  }
}
