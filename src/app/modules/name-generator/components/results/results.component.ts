import { Component, OnInit, Input } from '@angular/core';
import { GeneratedName } from '@namegen/app/models/generated-name.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.less']
})
export class ResultsComponent implements OnInit {
  @Input() results: GeneratedName[];

  constructor() { }

  ngOnInit() {
  }

}
