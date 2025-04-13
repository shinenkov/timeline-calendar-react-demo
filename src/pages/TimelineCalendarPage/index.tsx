/* eslint-disable @typescript-eslint/no-unused-vars */
import { Grid, Paper } from '@mui/material';
import TimelineCalendar, {
  type TimelineOptions,
} from 'timeline-calendar-react';
import { departmentsData, rangesData, usersData } from '../../data';
import { events } from '../../events';
import { statuses } from '../../statuses';

export const TimelineCalendarPage = (props: TimelineOptions) => {
  const {
    theme,
    currentDate,
    cellSize,
    accentColor,
    sidebarWidth,
    lang = 'en',
    openedSidebar,
  } = props;

  const downOptions = {
    theme: theme,
    cellSize,
    accentColor,
    sidebarWidth,
    lang,
    currentDate,
    openedSidebar: openedSidebar,
  } as TimelineOptions;
  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper elevation={2} sx={{ boxSizing: 'content-box', pr: 2 }}>
          <TimelineCalendar
            ranges={rangesData}
            users={usersData[lang]}
            departments={departmentsData[lang]}
            events={events[lang]}
            statuses={statuses[lang]}
            options={downOptions}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};
