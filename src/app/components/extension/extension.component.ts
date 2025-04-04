import { Component, inject, Input } from '@angular/core';

import { ExtensionManagerService } from '../../services/extension-manager.service';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { RemoveButtonComponent } from '../remove-button/remove-button.component';

@Component({
  selector: 'app-extension',
  templateUrl: './extension.component.html',
  imports: [CheckboxComponent, RemoveButtonComponent],
})
export class ExtensionComponent {
  private readonly extensionManagerService = inject(ExtensionManagerService);

  @Input() name: string = '';
  @Input() description: string = '';
  @Input() logoUrl: string = '';
  @Input() isActive!: boolean;

  setExenstionActivity(isActive: boolean) {
    this.extensionManagerService.changeActivity(this.name, isActive);
  }

  removeExtension(id: string) {
    this.extensionManagerService.removeExtension(id);
  }
}
