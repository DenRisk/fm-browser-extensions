import { Component, inject } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  imports: [IconComponent],
})
export class ThemeToggleComponent {
  private readonly themeService = inject(ThemeService);

  isDarkMode = this.themeService.isDarkMode;

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }
}
