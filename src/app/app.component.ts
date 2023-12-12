import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, MainComponent],
  templateUrl: './app.component.html',
  styleUrls: ['../demo-styling.css'],
})
export class AppComponent {
  title = 'angular-quickstart';
}
