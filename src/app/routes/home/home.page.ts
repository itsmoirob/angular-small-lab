import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <header>
        <h1>Angular Laboratory for <em>small</em> applications</h1>
        <h2>Standalone edition</h2>
      </header>
      <main>
        <ul>
          <li>ποΈ Full Standalone APIs β</li>
          <li>πΊοΈ Lazy Route Components β</li>
          <li>πΊ Container (page)β - Presenters (form, table...) β</li>
          <li>π§ͺ E2E Testing β</li>
        </ul>
      </main>
    </article>
  `,
  styles: [],
})
export class HomePage {}