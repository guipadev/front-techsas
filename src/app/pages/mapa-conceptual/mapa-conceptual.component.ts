import { Component } from '@angular/core';

@Component({
  selector: 'app-mapa-conceptual',
  templateUrl: './mapa-conceptual.component.html',
  styleUrls: ['./mapa-conceptual.component.css']
})

export class MapaConceptualComponent {

  showText = false;
  showText2 = false;
  isClicked = false;

  toggleText() {
    this.showText = !this.showText;
    this.isClicked = !this.isClicked;
  }

  toggleText2() {
    this.showText2 = !this.showText2;
    this.isClicked = !this.isClicked;
  }
}
