import { computed, Injectable, signal } from '@angular/core';
import {
  availableFilter,
  FilterListElement,
  FilterType,
} from '../configuration/filter.config';
import { Extension, extensionsData } from '../data/data';

@Injectable({ providedIn: 'root' })
export class ExtensionManagerService {
  private readonly extensions = signal<Extension[]>(extensionsData);
  private readonly filterList = signal<FilterListElement[]>(availableFilter);

  getExtensions() {
    return this.filteredExtensions;
  }

  // Checkbox Handling

  changeActivity(id: string, isActive: boolean) {
    this.extensions.update((list) => {
      return list.map((extension) => {
        if (extension.name == id) {
          return {
            ...extension,
            isActive,
          };
        }

        return extension;
      });
    });
  }

  // Filter Handling

  getFilterList() {
    return this.filterList;
  }

  setActiveFilter(filterType: FilterType) {
    this.filterList.update((list) => {
      return list.map((filter) => {
        return {
          ...filter,
          active: filter.type === filterType ? true : false,
        };
      });
    });
  }

  // Remove Handling

  removeExtension(id: string) {
    this.extensions.update((list) => {
      return list.filter((extension) => extension.name !== id);
    });
  }

  // computed, react on extensions and filterList changes

  filteredExtensions = computed(() => {
    console.log('PLS');

    const activeFilter = this.filterList().find(
      (filter) => filter.active === true
    )?.type;

    if (activeFilter === 'ACTIVE') {
      return this.extensions().filter(
        (extension) => extension.isActive === true
      );
    }

    if (activeFilter === 'INACTIVE') {
      return this.extensions().filter(
        (extension) => extension.isActive === false
      );
    }

    return this.extensions();
  });
}
