import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {

  showIntroduccion: boolean = false;

  activeOption: string | null = null;

  setActiveOption(option: string) {
    this.activeOption = option;

    if (option === 'actividad1' || 'actividad2') {
      this.showIntroduccion = !this.showIntroduccion;
    } else {
      this.showIntroduccion = false;
    }
  }

  toggleIntroduccion() {
    this.showIntroduccion = !this.showIntroduccion;
  }


}
