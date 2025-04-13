import { StatusType } from 'timeline-calendar-react';

type LocaleStringStatuses = {
  ru: string[];
  en: string[];
};

export const statusesString: LocaleStringStatuses = {
  en: ['Agreed', 'Pending decision', 'Open', 'Not agreed', 'Used'],
  ru: [
    'Согласован',
    'Ожидает решения',
    'Открыт',
    'Не согласован',
    'Использован',
  ],
};

type LocaleStatusType = {
  ru: StatusType[];
  en: StatusType[];
};

export const statuses: LocaleStatusType = {
  ru: [
    {
      id: 0,
      label: 'Согласован',
      color: '#0764E6',
    },
    {
      id: 1,
      label: 'Ожидает решения',
      color: '#6B07E6',
    },
    {
      id: 2,
      label: 'Открыт',
      color: '#6B07E6',
    },
    {
      id: 3,
      label: 'Не согласован',
      color: '#AA0000',
    },
    {
      id: 4,
      label: 'Использован',
      color: '#A14500',
    },
  ],
  en: [
    {
      id: 0,
      label: 'Agreed',
      color: '#0764E6',
    },
    {
      id: 1,
      label: 'Pending decision',
      color: '#6B07E6',
    },
    {
      id: 2,
      label: 'Open',
      color: '#6B07E6',
    },
    {
      id: 3,
      label: 'Not agreed',
      color: '#AA0000',
    },
    {
      id: 4,
      label: 'Used',
      color: '#A14500',
    },
  ],
};
