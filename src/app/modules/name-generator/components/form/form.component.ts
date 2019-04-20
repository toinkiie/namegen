import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Regions } from '@namegen/app/models/regions.model';
import { ListOptions } from '@namegen/app/interfaces/list-options';
import { GenerateRequest } from '@namegen/app/interfaces/generate-request';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {

  @Output() generate: EventEmitter<GenerateRequest> = new EventEmitter;

  formGenerator: FormGroup;
  regionListOptions: ListOptions[];

  constructor(private fb: FormBuilder, private regions: Regions) { }

  ngOnInit() {
    this.formGenerator = this.fb.group({
      gender: [null],
      nat: [null],
      results: [null, [Validators.required, Validators.max(12)]]
    });

    this.regionListOptions = this.regions.getListOptions();
  }


  submit(): void {
    Object.keys(this.formGenerator.controls).forEach(key => {
      this.formGenerator.get(key).markAsDirty();
      this.formGenerator.get(key).updateValueAndValidity();
    });

    if (this.formGenerator.valid) {
      this.generate.emit({
        gender: this.formGenerator.get('gender').value,
        results: this.formGenerator.get('results').value,
        nat: this.transformNat(this.formGenerator.get('nat').value)
      });
    }
  }

  private transformNat(nat: [string]): string {
    return nat !== null ? (this.formGenerator.get('nat').value).toString() : null;
  }

}
