import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { ItemsComponent } from './item/item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ItemsComponent], 
  template: `<app-items></app-items>`,
})
export class AppComponent {}
