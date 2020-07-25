import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {
  @Input() type: string;
  @Input() name: string;
  @Input() path: string;

  constructor() {}

  ngOnInit(): void {}
}
