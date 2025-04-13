import { User, RangeType, Department } from 'timeline-calendar-react';

export const rangesData: RangeType[] = [
  {
    id: 1,
    startDate: '2025-04-01',
    endDate: '2025-04-15',
    userId: 1,
    eventType: 0,
    statusType: 1,
    comment: 'string',
  },
  {
    id: 2,
    startDate: '2025-04-10',
    endDate: '2025-04-20',
    userId: 2,
    eventType: 2,
    statusType: 2,
    comment: 'string',
  },
  {
    id: 3,
    startDate: '2025-04-05',
    endDate: '2025-04-10',
    userId: 3,
    eventType: 1,
    statusType: 3,
    comment: 'string',
  },
  {
    id: 4,
    startDate: '2025-04-19',
    endDate: '2025-04-25',
    userId: 1,
    eventType: 3,
    statusType: 0,
    comment: 'string',
  },
  {
    id: 5,
    startDate: '2025-03-19',
    endDate: '2025-04-12',
    userId: 2,
    eventType: 0,
    statusType: 1,
    comment: 'string',
  },
  {
    id: 6,
    startDate: '2025-04-19',
    endDate: '2025-05-05',
    userId: 3,
    eventType: 0,
    statusType: 2,
    comment: 'string',
  },
  {
    id: 7,
    startDate: '2025-04-15',
    endDate: '2025-04-25',
    userId: 4,
    eventType: 3,
    statusType: 3,
    comment: 'string',
  },
  {
    id: 8,
    startDate: '2025-04-07',
    endDate: '2025-04-20',
    userId: 5,
    eventType: 0,
    statusType: 2,
    comment: 'string',
  },
  {
    id: 9,
    startDate: '2025-04-13',
    endDate: '2025-04-17',
    userId: 6,
    eventType: 2,
    statusType: 1,
    comment: 'string',
  },
  {
    id: 10,
    startDate: '2025-04-03',
    endDate: '2025-04-14',
    userId: 6,
    eventType: 3,
    statusType: 1,
    comment: 'string',
  },
];

type UserLocale = {
  ru: User[];
  en: User[];
};

export const usersData: UserLocale = {
  ru: [
    { id: 1, name: 'Илья Петров', department: 'Продажи' },
    { id: 2, name: 'Дмитрий Иванов', department: 2 },
    { id: 3, name: 'Михаил Смирнов', department: undefined },
    { id: 4, name: 'Елена Соболева', department: 1 },
    { id: 5, name: 'Екатерина Иванова', department: 3 },
    { id: 6, name: 'Алексей Браунов', department: 1 },
  ],
  en: [
    { id: 1, name: 'Sara Johnson', department: 'Sales' },
    { id: 2, name: 'John Doe', department: 2 },
    { id: 3, name: 'Michael Smith', department: undefined },
    { id: 4, name: 'Emily Davis', department: 1 },
    { id: 5, name: 'Kate Johnson', department: 3 },
    { id: 6, name: 'Tom Brown', department: 1 },
  ],
};

type DepartmentLocale = {
  ru: Department[];
  en: Department[];
};

export const departmentsData: DepartmentLocale = {
  ru: [
    { id: 1, name: 'Продажи', manager: 'Доe' },
    { id: 2, name: 'Маркетинг', manager: 'Смит' },
    { id: 3, name: 'Программирование', manager: 'Екатерина' },
  ],
  en: [
    { id: 1, name: 'Sales', manager: 'Doe' },
    { id: 2, name: 'Marketing', manager: 'Smith' },
    { id: 3, name: 'Programming', manager: 'Keit' },
  ],
};
