import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';



@NgModule({
  declarations: [
    StructuralDirectivesComponent,
    AttributeDirectivesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StructuralDirectivesComponent,AttributeDirectivesComponent
  ]
})
export class DirectivesModule { }
