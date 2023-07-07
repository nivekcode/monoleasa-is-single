import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BazComponent} from "@kreuzerk/monoleasa-is-single-baz";

@Component({
  selector: 'monoleasa-is-single-bar',
  standalone: true,
  imports: [CommonModule, BazComponent],
  template: `
    <p>{{ title }}</p>
    <monoleasa-is-single-baz/>
  `,
  styles: [],
})
export class BarComponent {
  title = 'bar works!';
}
