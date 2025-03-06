import { Component } from '@angular/core';
import { RegisterComponent } from './register/register.component';  // Import RegisterComponent

@Component({
  selector: 'app-root',
  standalone: true,  // Ensure this is a standalone component
  imports: [RegisterComponent],  // Import RegisterComponent
  template: `<app-register></app-register>`,  // Add <app-register> tag here
  styleUrls: ['./app.component.css']
})
export class AppComponent {}

