import {
  EventType,
  RangeType,
  StatusType,
  User,
} from 'timeline-calendar-react';

export const mockUsers: User[] = [
  { id: 1, name: 'John Doe', department: 'Sales' },
  { id: 2, name: 'Jane Smith', department: undefined },
];

export const mockRanges: RangeType[] = [
  {
    id: 1,
    userId: 1,
    eventType: 1,
    statusType: 1,
    startDate: '2025-04-01',
    endDate: '2025-04-05',
  },
  {
    id: 2,
    userId: 2,
    eventType: 2,
    statusType: 2,
    startDate: '2025-04-10',
    endDate: '2025-04-15',
  },
];

export const mockEvents: EventType[] = [
  { id: 1, label: 'Vacation' },
  { id: 2, label: 'Sick leave' },
];

export const mockStatuses: StatusType[] = [
  { id: 1, label: 'Approved' },
  { id: 2, label: 'Pending' },
];
