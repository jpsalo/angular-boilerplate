import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CaseService } from '~services/case.service';
import { Case } from '~interfaces/case';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss'],
})
export class CaseComponent implements OnInit {
  case: Case;

  constructor(private route: ActivatedRoute, private caseService: CaseService) {}

  ngOnInit(): void {
    this.getCase();
  }

  getCase(): void {
    const slug = this.route.snapshot.paramMap.get('path');
    this.caseService.getCase(slug).subscribe((theCase) => (this.case = theCase)); // FIXME: 'theCase'
  }
}
