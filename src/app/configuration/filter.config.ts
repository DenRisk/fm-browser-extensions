export type FilterType = 'ALL' | 'INACTIVE' | 'ACTIVE';
export type FilterListElement = {
  type: FilterType;
  text: string;
  active: boolean;
};

export const availableFilter: FilterListElement[] = [
  {
    type: 'ALL',
    text: 'All',
    active: true,
  },
  {
    type: 'ACTIVE',
    text: 'Active',
    active: false,
  },
  {
    type: 'INACTIVE',
    text: 'Inactive',
    active: false,
  },
];
