import { Component, OnInit } from '@angular/core';
import { BioService } from '~services/bio.service';
import { CaseService } from '~services/case.service';
import { Case } from '~interfaces/case';
import { Bio } from '~interfaces/bio';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  bio: Bio;
  cases: Case[];

  constructor(private bioService: BioService, private caseService: CaseService) {}

  ngOnInit(): void {
    this.getBio();
    this.getCases();
  }

  getBio(): void {
    this.bioService.getBioFor('hero').subscribe((bio) => (this.bio = bio));
  }

  getCases(): void {
    this.caseService.getCases().subscribe((cases) => (this.cases = cases));
  }
}
