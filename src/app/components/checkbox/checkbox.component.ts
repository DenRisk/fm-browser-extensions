import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  imports: [NgClass],
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent {
  @Input() id!: string;
  @Input() isActive!: boolean;

  @Output() onToggleCheckbox = new EventEmitter<boolean>();

  toggleCheckbox(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.onToggleCheckbox.emit(isChecked);
  }
}
