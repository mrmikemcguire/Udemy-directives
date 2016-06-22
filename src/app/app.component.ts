import { Component } from '@angular/core';
import {AttributeDirectivesComponent} from "./attribute-directives.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  template: `
      <my-attribute-directives></my-attribute-directives>
    `,
  directives: [AttributeDirectivesComponent]
})
export class AppComponent {
  title = 'app works!';
}
