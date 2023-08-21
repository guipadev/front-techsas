import { Component } from '@angular/core';

@Component({
  selector: 'app-seleccion-multiple',
  templateUrl: './seleccion-multiple.component.html',
  styleUrls: ['./seleccion-multiple.component.css']
})

export class SeleccionMultipleComponent {
  submitButtonEnabled = false;
  showFeedback = false;
  feedbackMessage = '';
  showMensajeRetroalimentacion = false;

  enableSubmitButton() {
    this.submitButtonEnabled = true;
  }

  submitForm(event: Event) {
    event.preventDefault();

    const selectedValue = (<HTMLInputElement>document.querySelector('input[name="capital"]:checked')).value;

    if (selectedValue === 'bogota') {
      this.feedbackMessage = '✅ Acertaste';
    } else {
      this.feedbackMessage = '❌ No acertaste';
    }

    this.showFeedback = true;
  }

  mostrarMensajeRetroalimentacion() {
    this.showMensajeRetroalimentacion = true;
  }

  closeRetroalimentacionModal() {
    this.showMensajeRetroalimentacion = false;
  }
}
