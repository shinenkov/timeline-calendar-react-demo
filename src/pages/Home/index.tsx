import { Box, Grid, Divider, TextField, Typography } from '@mui/material';
import { ThemeSwitcher } from '../../components/Parameters/ThemeSwitcher';
import { TimelineCalendarPage } from '../../pages/TimelineCalendarPage/';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useLocalStorage } from 'usehooks-ts';
import { Theme } from 'timeline-calendar-react';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ru';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { homeLangs } from './lang';

type HomeComponentProps = {
  colorMode: { toggleColorMode: () => void };
};

export const Home = (props: HomeComponentProps) => {
  const [theme] = useLocalStorage<Theme>('theme', 'dark');

  const [currentDate, setCurrentDate] = useState<Dayjs | null>(
    dayjs('2025-04-01')
  );
  const [cellSize, setCellSize] = useState('');
  const [accentColor, setAccentColor] = useState('#00c853');
  const [sidebarWidth, setSidebarWidth] = useState(300);
  const [lang, setLang] = useState<'ru' | 'en'>('en');
  const [openedSidebar, setOpenedSidebar] = useState(false);

  const handleChangeLang = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLang((event.target as HTMLInputElement).value as 'ru' | 'en');
  };

  const handleChangeOpened = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOpenedSidebar((event.target as HTMLInputElement).value === 'true');
  };

  return (
    <Box sx={{ pt: 1, pb: 2, pl: 4, pr: 4, width: '100%' }}>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Grid container sx={{ mb: 2 }}>
        <Grid item xs={6}>
          <Typography variant="h6" sx={{ textAlign: 'left', mb: 2 }}>
            Options
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid container sx={{ alignItems: 'center' }}>
            <Grid item xs={12} sx={{ textAlign: 'right' }}>
              <ThemeSwitcher colorMode={props.colorMode} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} sx={{ alignItems: 'center' }}>
            <Grid item xl={2} lg={3} md={3} sm={6} xs={12}>
              <TextField
                fullWidth
                label="cellSize (f.e. 40px)"
                value={cellSize}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setCellSize(event.target.value);
                }}
              />
            </Grid>
            <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
              <TextField
                fullWidth
                label="accentColor"
                value={accentColor}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setAccentColor(event.target.value);
                }}
              />
            </Grid>
            <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
              <FormControl sx={{ flexDirection: 'row', alignItems: 'center' }}>
                <FormLabel
                  sx={{ mr: 2 }}
                >{`${homeLangs[lang].language}:`}</FormLabel>
                <RadioGroup row value={lang} onChange={handleChangeLang}>
                  <FormControlLabel value="en" control={<Radio />} label="En" />
                  <FormControlLabel value="ru" control={<Radio />} label="Рф" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
              <FormControl sx={{ flexDirection: 'row', alignItems: 'center' }}>
                <FormLabel sx={{ mr: 2 }}>openedSidebar:</FormLabel>
                <RadioGroup
                  row
                  value={openedSidebar}
                  onChange={handleChangeOpened}
                  sx={{ flexWrap: 'nowrap' }}
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label={`${homeLangs[lang].yes}`}
                  />
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label={`${homeLangs[lang].no}`}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
              <TextField
                fullWidth
                type={'number'}
                label="sidebarWidth"
                value={sidebarWidth}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setSidebarWidth(Number(event.target.value));
                }}
              />
            </Grid>
            <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale={lang}
              >
                <DatePicker
                  sx={{ width: '100%' }}
                  label="currentDate"
                  value={dayjs(currentDate)}
                  views={['month', 'year']}
                  onChange={(newValue) => setCurrentDate(newValue)}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 4, mb: 4 }} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TimelineCalendarPage
            theme={theme}
            currentDate={dayjs(currentDate).format('YYYY-MM-DD')}
            cellSize={cellSize}
            accentColor={accentColor}
            sidebarWidth={sidebarWidth}
            lang={lang}
            openedSidebar={openedSidebar}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
