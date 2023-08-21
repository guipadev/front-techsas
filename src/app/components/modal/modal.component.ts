import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {
  @Output() close: EventEmitter<void> = new EventEmitter<void>();


  closeModal() {
    this.close.emit();
  }

}
