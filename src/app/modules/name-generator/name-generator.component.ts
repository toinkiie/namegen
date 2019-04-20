import { Component, OnInit } from '@angular/core';
import { GenerateRequest } from '@namegen/app/models/generate-request';
import { NameGeneratorService } from '@namegen/app/http/name-generator.service';
import { GeneratedName } from '@namegen/app/models/generated-name.model';

@Component({
  selector: 'app-name-generator',
  templateUrl: './name-generator.component.html',
  styleUrls: ['./name-generator.component.less']
})
export class NameGeneratorComponent implements OnInit {
  results: GeneratedName[];

  constructor(private nameGeneratorService: NameGeneratorService) { }

  ngOnInit() {
  }

  generate(request: GenerateRequest): void {

    this.nameGeneratorService.generate(request).subscribe(res => {
      this.results = Object.assign([], res);
    });

  }
}
