import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'monoleasa-is-single-baz',
  standalone: true,
  imports: [CommonModule],
  template: `<p>{{ title }}</p>`,
  styles: [],
})
export class BazComponent {
  title = 'baz works!';
}
