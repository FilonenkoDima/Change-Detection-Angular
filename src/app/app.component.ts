import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'changeDetectionAngular';

  get debugOutput() {
    console.log('[AppComponent] "debugOutput" binding re-evaluated.');
    return 'AppComponent Component Debug Output';
  }
}
