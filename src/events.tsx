import { EventType } from 'timeline-calendar-react';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import AlarmOffIcon from '@mui/icons-material/AlarmOff';
import AirplanemodeInactiveIcon from '@mui/icons-material/AirplanemodeInactive';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

type LocaleStringEventType = {
  ru: string[];
  en: string[];
};

export const eventsString: LocaleStringEventType = {
  en: ['Vacantion', 'Overtime', 'Sick leave', 'Remote'],
  ru: ['Отпуск', 'Переработка', 'Больничный', 'Из дома'],
};

type LocaleEventType = {
  ru: EventType[];
  en: EventType[];
};

export const events: LocaleEventType = {
  ru: [
    {
      id: 0,
      label: 'Отпуск',
      icon: <FlightTakeoffIcon />,
      color: '#536dfe',
    },
    {
      id: 1,
      label: 'Переработка',
      icon: <AirplanemodeInactiveIcon />,
      color: '#c2185b',
    },
    {
      id: 2,
      label: 'Больничный',
      icon: <MedicalServicesIcon />,
      color: '#ef6c00',
    },
    {
      id: 3,
      label: 'Из дома',
      icon: <AlarmOffIcon />,
      color: '#00e676',
    },
  ],
  en: [
    {
      id: 0,
      label: 'Vacantion',
      icon: <FlightTakeoffIcon />,
      color: '#536dfe',
    },
    {
      id: 1,
      label: 'Overtime',
      icon: <AirplanemodeInactiveIcon />,
      color: '#c2185b',
    },
    {
      id: 2,
      label: 'Sick leave',
      icon: <MedicalServicesIcon />,
      color: '#ef6c00',
    },
    {
      id: 3,
      label: 'Remote',
      icon: <AlarmOffIcon />,
      color: '#00e676',
    },
  ],
};
