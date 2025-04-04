import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { log } from 'console';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDarkMode = signal<boolean>(false);

  private platformId = inject(PLATFORM_ID); // Injeziert PLATFORM_ID

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.applyTheme(this.isDarkMode());
    }
  }

  // Toggle-Funktion für Dark Mode
  toggleDarkMode() {
    console.log('moin');

    this.isDarkMode.update((value) => !value);
    this.applyTheme(this.isDarkMode());
  }

  // Dark Mode Klasse setzen oder entfernen
  private applyTheme(isDark: boolean) {
    if (isPlatformBrowser(this.platformId)) {
      console.log('noooo');

      const htmlElement = document.documentElement;
      if (isDark) {
        htmlElement.classList.add('dark');
      } else {
        htmlElement.classList.remove('dark');
      }
    }
  }
}
