import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LinkComponent } from './ui/components/link.component';

@Component({
  selector: 'lab-root',
  standalone: true,
  imports: [CommonModule, LinkComponent, RouterOutlet, RouterLink],
  template: `
    <header>
      <nav>
        <ul><strong><a routerLink="/">{{title}}</a></strong></ul>
        <ul><a routerLink="/about">About us</a></ul>
      </nav>
    </header>
    <router-outlet></router-outlet>
    <footer>
      <a [href]="repoUrl" target="_blank">Repository code on GitHub </a>
      ©️ {{ year }} by <lab-link [href]="repoUrl" caption="Repository code on GitHub"></lab-link>
    </footer>
  `,
})
export class AppComponent {
  title = '🅰️ 🌱 🧫 angular-small-lab';
  repoUrl = 'https://github.com/AlbertoBasalo/angular-small-lab';
  year = new Date().getFullYear();
}
