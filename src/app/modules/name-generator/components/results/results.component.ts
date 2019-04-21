import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GeneratedName } from '@namegen/app/models/generated-name.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.less']
})
export class ResultsComponent implements OnInit {
  @Input() results: GeneratedName[];
  @Input() loading: boolean;
  @Input() numberOfResult: number;

  @Output() regenerate: EventEmitter<void> = new EventEmitter;
  @Output() toggleForm: EventEmitter<void> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  numberOfLoader() {
    return [].constructor(this.numberOfResult);
  }

}
