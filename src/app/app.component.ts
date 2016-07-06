import { Component } from '@angular/core';
import {AttributeDirectivesComponent} from "./attribute-directives.component";
import {StructuralDirectivesComponent} from "./structural-directive.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  template: `
      <my-attribute-directives></my-attribute-directives>
      <br>
      <h1>Structural Directives</h1>
      <my-structural-directives></my-structural-directives>
    `,
  directives: [AttributeDirectivesComponent, StructuralDirectivesComponent]
})
export class AppComponent {
  title = 'app works!';
}
