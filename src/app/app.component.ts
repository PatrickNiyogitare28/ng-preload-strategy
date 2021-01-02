import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-preload-demo';
  isMenuOpen = false;

  constructor(){
    console.log("Loaded App...");
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
