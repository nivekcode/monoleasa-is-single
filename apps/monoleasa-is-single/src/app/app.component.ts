import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {BarComponent} from "@kreuzerk/monoleasa-is-single-bar";
import {FooComponent} from "@kreuzerk/monoleasa-is-single-foo";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, BarComponent, FooComponent],
  selector: 'monoleasa-is-single-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'monoleasa-is-single';
}
