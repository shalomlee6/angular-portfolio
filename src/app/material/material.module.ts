import { NgModule } from '@angular/core';
import { MatToolbarModule, MatSidenavModule } from '@angular/material'
;
const Material = [
  MatToolbarModule,
  MatSidenavModule
];


@NgModule({
  declarations: [],
  imports: [
    Material
  ],
  exports: [
    Material
  ]
})
export class MaterialModule { }
