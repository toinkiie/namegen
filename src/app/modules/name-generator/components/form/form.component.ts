import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Regions } from '@namegen/app/models/regions.model';
import { GenerateRequest } from '@namegen/app/models/generate-request';
import { ListOptions } from '@namegen/app/models/list-options.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {

  @Input() loading: boolean;
  @Output() generate: EventEmitter<GenerateRequest> = new EventEmitter;
  @Output() reset: EventEmitter<void> = new EventEmitter;

  formGenerator: FormGroup;
  regionListOptions: ListOptions[];
  selectedValue: null;

  constructor(private fb: FormBuilder, private regions: Regions) { }

  ngOnInit() {
    this.formGenerator = this.fb.group({
      gender: [null],
      nat: [null],
      results: [null, [Validators.max(12)]]
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
        results: this.formGenerator.get('results').value ? this.formGenerator.get('results').value : 12,
        nat: this.transformNat(this.formGenerator.get('nat').value)
      });
    }
  }

  resetForm() {
    this.formGenerator.reset();
    this.reset.emit();
  }

  private transformNat(nat: [string]): string {
    return nat !== null ? (this.formGenerator.get('nat').value).toString() : null;
  }

}
