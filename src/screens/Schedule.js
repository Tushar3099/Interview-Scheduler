import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'react-dropdown/style.css';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import styles from './styles/schedule.module.css';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from '../config';

const options = [
  { value: 'mac@gmail.com', label: 'mac@gmail.com' },
  { value: 'john@gmail.com', label: 'john@gmail.com' },
  { value: 'sam@gmail.com', label: 'sam@gmail.com' },
];
function Schedule() {
  const location = useLocation();
  const interview = location.state;
  console.log(interview);
  const [candidates, setCandidates] = useState([]);
  const [interviewers, setInterviewers] = useState([]);
  const [selectedStartDate, handleStartDateChange] = useState(new Date());
  const [selectedEndDate, handleEndDateChange] = useState(new Date());
  const [candidateEmail, setCondidateEmail] = useState(null);
  const [interviewerEmail, setInterviewerEmail] = useState(null);

  useEffect(() => {
    if (interview) {
      let newCand = [];
      let newIntr = [];
      interview.participants.map((item, _index) => {
        if (item.role == 'interviewer') {
          newIntr.push({
            label: item.name,
            value: item.id,
          });
        } else {
          newCand.push({
            label: item.name,
            value: item.id,
          });
        }
      });
      setCondidateEmail(newCand);
      setInterviewerEmail(newIntr);
      handleStartDateChange(interview.startTime);
      handleEndDateChange(interview.endTime);
    }
  }, []);
  useEffect(() => {
    let participants = [];
    fetch(`${API_URL}/participants/interviewee`, {})
      .then((res) => res.json())
      .then((data) => {
        data.participants.map((participant) => {
          participants = [
            ...participants,
            { value: participant._id, label: participant.email },
          ];
        });
        setCandidates(participants);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let participants = [];
    fetch(`${API_URL}/participants/interviewer`, {})
      .then((res) => res.json())
      .then((data) => {
        data.participants.map((participant) => {
          participants = [
            ...participants,
            { value: participant._id, label: participant.email },
          ];
        });
        setInterviewers(participants);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleCandidateEmailChange = (option) => {
    // console.log(options);
    setCondidateEmail(option);
  };
  const handleInterviewerEmailChange = (option) => {
    // console.log(options);
    setInterviewerEmail(option);
  };

  const handleSubmit = () => {
    if (candidateEmail == null) {
      toast.error('Select Candidates for interview');
    } else if (interviewerEmail == null) {
      toast.error('Select Interviewers for interview');
    } else if (Date.parse(selectedStartDate) >= Date.parse(selectedEndDate)) {
      toast.error('Start date-time has to be less that end date-time');
    } else {
      toast.success('Interview Scheduled');
    }
    console.log('Candidate : ', candidateEmail);
    console.log('interviewer : ', interviewerEmail);
    console.log('start : ', Date.parse(selectedStartDate));
    console.log('end : ', Date.parse(selectedEndDate));
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.dropdown}>
          <h1 className={styles.heading}>Interviewees</h1>
          <Select
            className={styles.list}
            value={candidateEmail}
            onChange={handleCandidateEmailChange}
            options={candidates}
            isSearchable={true}
            placeholder={'Add email'}
            isMulti={true}
          />
        </div>
        <div className={styles.dropdown}>
          <h1 className={styles.heading}>Interviewers</h1>
          <Select
            className={styles.list}
            value={interviewerEmail}
            onChange={handleInterviewerEmailChange}
            options={interviewers}
            isSearchable={true}
            isMulti={true}
            placeholder={'Add email'}
          />
        </div>
        <div className={styles.dropdown}>
          {/* <h1 className={styles.heading}>Date & Time</h1> */}
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <h1 className={styles.heading}>Start</h1>
            <DateTimePicker
              value={selectedStartDate}
              onChange={handleStartDateChange}
            />
            <h1 className={styles.heading}>End</h1>
            <DateTimePicker
              value={selectedEndDate}
              onChange={handleEndDateChange}
            />
          </MuiPickersUtilsProvider>
        </div>
        <div className={styles.scheduleCont}>
          <div onClick={handleSubmit} className={styles.schedule}>
            Schedule
          </div>
        </div>
      </div>
      <ToastContainer
        position='top-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Schedule;
