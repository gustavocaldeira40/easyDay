import React, { useState } from 'react';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { ContainerBackground } from './style';

const DatePickerExample: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());

  const handleDateChange = (newValue: Dayjs | null): void => {
    setSelectedDate(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ContainerBackground>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          value={selectedDate}
          onChange={handleDateChange}
          minDate={dayjs()}
          orientation="landscape"
          sx={{
            backgroundColor: '#fff',
            borderRadius: '5px',
            // padding: '2px',
          }}
        />
      </ContainerBackground>
    </LocalizationProvider>
  );
};

export default DatePickerExample;
