import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNGModule } from './prime-ng/prime-ng.module';
import { TruncatePipe } from './pipes/truncate.pipe';
import { TooltipDirective } from './directives/tooltip.directive';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TruncatePipe,
    TooltipDirective,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNGModule
  ],
  exports: [
    TruncatePipe,
    TooltipDirective,
    ButtonComponent,
    FormsModule,
    PrimeNGModule
  ]
})
export class SharedModule { }
