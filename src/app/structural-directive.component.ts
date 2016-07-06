import { Component } from '@angular/core';

@Component ({
  selector: 'my-structural-directives',
  template: `
    <section class="directive">
      <h2>*ngIf</h2>
      <div>
        Enter a number higher than ten 
        <br>
        <input type="text" #number (keyup)="0">
      </div>
      <div *ngIf="number.value > 10">
          <h5>Any children follow their parent</h5>
        Number is greater than ten   
      </div>
    </section>
`

})

export class StructuralDirectivesComponent {

}
