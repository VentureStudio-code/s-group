import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './FullCalendarStyles.css';
import { Button, Tooltip } from '@mui/material';
const Fullcalander = () => {
  const events = [
    {
      title: 'The S-Group Social Business Networking Event 2024',
      date: '2024-11-29',
      description:"Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.Praesent non nunc mollis, fermentum neque at, semper arcu. Nullam eget est sed sem iaculis gravida eget vitae justo."
    },
  ];

  

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        initialDate="2024-11-01"
        events={events}
        eventContent={(eventInfo) => {
          console.log("eventInfo",)
          return (
            <Tooltip title={eventInfo.event.extendedProps.description} arrow>
              {eventInfo.event.title}
            </Tooltip>
          );
        }}
      />
    </div>
  );
};

export default Fullcalander;
