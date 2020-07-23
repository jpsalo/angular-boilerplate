import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss'],
})
export class CaseComponent implements OnInit {
  @Input() type: string;

  constructor() {}

  ngOnInit(): void {}
}
