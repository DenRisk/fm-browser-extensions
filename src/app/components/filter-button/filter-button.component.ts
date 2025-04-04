import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterType } from '../../configuration/filter.config';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  imports: [NgClass],
})
export class FilterButtonComponent {
  @Input({ required: true }) id!: FilterType;
  @Input() active = false;
  @Output() activeChange = new EventEmitter<FilterType>();

  toggleActive() {
    this.activeChange.emit(this.id);
  }
}
