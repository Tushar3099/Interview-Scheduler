import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import styles from './styles/schedule.module.css';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
function Schedule() {
  const [selectedDate, handleDateChange] = useState(new Date());
  const [selectedEmail, setEmail] = useState(null);

  const handleEmailChange = (option) => {
    setEmail(option);
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.dropdown}>
          <h1 className={styles.heading}>Interviewees</h1>
          <Select
            className={styles.list}
            value={selectedEmail}
            onChange={handleEmailChange}
            options={options}
            isSearchable={true}
            placeholder={'Add email'}
            isMulti={true}
          />
        </div>
        <div className={styles.dropdown}>
          <h1 className={styles.heading}>Interviewers</h1>
          <Select
            className={styles.list}
            value={selectedEmail}
            onChange={handleEmailChange}
            options={options}
            isSearchable={true}
            isMulti={true}
            placeholder={'Add email'}
          />
        </div>
        <div className={styles.dropdown}>
          {/* <h1 className={styles.heading}>Date & Time</h1> */}
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <h1 className={styles.heading}>Start</h1>
            <DateTimePicker value={selectedDate} onChange={handleDateChange} />
            <h1 className={styles.heading}>End</h1>
            <DateTimePicker value={selectedDate} onChange={handleDateChange} />
          </MuiPickersUtilsProvider>
        </div>
        <div className={styles.scheduleCont}>
          <div className={styles.schedule}>Schedule</div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
