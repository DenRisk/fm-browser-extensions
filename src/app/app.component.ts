import { ThemeService } from './services/theme.service';
import { Component, inject } from '@angular/core';

import { ExtensionComponent } from './components/extension/extension.component';
import { FilterButtonComponent } from './components/filter-button/filter-button.component';
import { IconComponent } from './components/icon/icon.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { FilterType } from './configuration/filter.config';
import { ExtensionManagerService } from './services/extension-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    IconComponent,
    ThemeToggleComponent,
    FilterButtonComponent,
    ExtensionComponent,
  ],
})
export class AppComponent {
  private readonly extensionManagerService = inject(ExtensionManagerService);
  private readonly ThemeService = inject(ThemeService);

  extensions = this.extensionManagerService.getExtensions();
  filterList = this.extensionManagerService.getFilterList();
  isDarkMode = this.ThemeService.isDarkMode;

  setActiveFilter(filterType: FilterType) {
    this.extensionManagerService.setActiveFilter(filterType);
  }
}
