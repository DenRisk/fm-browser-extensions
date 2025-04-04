import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-remove-button',
  templateUrl: './remove-button.component.html',
})
export class RemoveButtonComponent {
  @Input() id!: string;
  @Output()
  onRemoveExtension = new EventEmitter<string>();

  removeExtension(id: string) {
    this.onRemoveExtension.emit(id);
  }
}
