import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { GenerateRequest } from '@namegen/app/models/generate-request';
import { NameGeneratorService } from '@namegen/app/http/name-generator.service';
import { GeneratedName } from '@namegen/app/models/generated-name.model';

@Component({
  selector: 'app-name-generator',
  templateUrl: './name-generator.component.html',
  styleUrls: ['./name-generator.component.less']
})
export class NameGeneratorComponent implements OnInit {
  results: GeneratedName[] = null;
  loading: boolean;
  numberOfResults: number;
  isFormHidden = false;
  previousRequest: GenerateRequest;

  @ViewChild('results') resultsRef: ElementRef;

  constructor(private nameGeneratorService: NameGeneratorService) { }

  ngOnInit() {
    this.setFormVisibility((window).innerWidth);
  }

  generate(request: GenerateRequest): void {
    this.loading = true;
    this.results = null;
    this.numberOfResults = request.results;
    this.previousRequest = Object.assign({}, request);

    this.nameGeneratorService.generate(request).subscribe(res => {
      this.results = Object.assign([], res);
      this.loading = false;
      this.setFormVisibility((window).innerWidth);
    });
  }

  regenerate() {
    this.generate(this.previousRequest);
  }

  reset() {
    this.results = null;
    this.loading = false;
    this.setFormVisibility((window).innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onresize(e): void {
    this.setFormVisibility(e.target.innerWidth);
  }

  private setFormVisibility(width: number) {
    if (width < 992 && this.results !== null) {
      this.isFormHidden = true;
    } else {
      this.isFormHidden = false;
    }
  }
}
