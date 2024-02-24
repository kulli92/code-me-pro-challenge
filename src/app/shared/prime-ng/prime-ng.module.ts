
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import {CheckboxModule} from 'primeng/checkbox';
import { MenubarModule } from 'primeng/menubar';

 
@NgModule({
  imports: [
    TableModule,
    CheckboxModule,
    ButtonModule,
    MenubarModule 
  ],
  exports: [
    TableModule,
    CheckboxModule,
    ButtonModule,
    MenubarModule
  ]
})
export class PrimeNGModule { }
