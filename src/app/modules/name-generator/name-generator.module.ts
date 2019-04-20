import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { ResultsComponent } from './components/results/results.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NameGeneratorComponent } from './name-generator.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    FormComponent,
    ResultsComponent,
    NameGeneratorComponent
  ],
  exports: [NameGeneratorComponent]
})
export class NameGeneratorModule { }
