import styles from './styles/list.module.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Moment, { MomentProps } from 'react-moment';

const data = [
  {
    id: 8721643816329813,
    participants: [
      {
        name: 'tushar',
        email: 'xyz@gmail.com',
        role: 'interviewee',
      },
      {
        name: 'vedant',
        email: 'ved@gmail.com',
        role: 'interviewer',
      },
      {
        name: 'ayush',
        email: 'ayush@gmail.com',
        role: 'interviewee',
      },
    ],
    startTime: 1627485513009,
    endTime: 1627485552429,
  },
  {
    id: 8721643816329813,
    participants: [
      {
        name: 'tushar',
        email: 'xyz@gmail.com',
        role: 'interviewee',
      },
      {
        name: 'vedant',
        email: 'ved@gmail.com',
        role: 'interviewer',
      },
      {
        name: 'ayush',
        email: 'ayush@gmail.com',
        role: 'interviewee',
      },
    ],
    startTime: 1627485513009,
    endTime: 1627485552429,
  },
  {
    id: 8721643816329813,
    participants: [
      {
        name: 'tushar',
        email: 'xyz@gmail.com',
        role: 'interviewee',
      },
      {
        name: 'vedant',
        email: 'ved@gmail.com',
        role: 'interviewer',
      },
      {
        name: 'ayush',
        email: 'ayush@gmail.com',
        role: 'interviewee',
      },
    ],
    startTime: 1627485513009,
    endTime: 1627485552429,
  },
];

function List() {
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    setInterviews(data);
  }, []);

  const handleEdit = (name) => {
    console.log(name);
  };

  const handleDelete = (interview) => {
    <Link
      to={{
        pathname: '/schedule-interview',
        state: interview,
      }}
    />;
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Upcoming Interviews</div>
      {interviews.map((interview, _index) => (
        <div className={styles.card}>
          <div className={styles.dateTime}>
            <div className={styles.dateItem}>
              <h3>Start Date-Time</h3>
              <Moment
                className={styles.formatDate}
                date={interview.startTime}
                format='YYYY/MM/DD'
              />
              <Moment
                className={styles.formatDate}
                date={interview.endTime}
                format='hh:mm:ss'
              />
            </div>
            <div className={styles.dateItem}>
              <h3>End Date-Time</h3>
              <Moment
                className={styles.formatDate}
                date={interview.startTime}
                format='YYYY/MM/DD'
              />
              <Moment
                className={styles.formatDate}
                date={interview.endTime}
                format='hh:mm:ss'
              />
            </div>
          </div>
          <div className={styles.participants}>
            <h2>Participants</h2>
            <div className={styles.listParticipants}>
              {interview.participants.map((participant, _index) => (
                <h3>{participant.name.toUpperCase()}</h3>
              ))}
            </div>
          </div>
          <div className={styles.buttons}>
            <Link
              to={{
                pathname: '/schedule-interview',
                state: interview,
              }}
            >
              <div
                onClick={() => handleEdit(interview)}
                className={styles.edit}
              >
                Edit
              </div>
            </Link>
            <div
              onClick={() => handleDelete(interview)}
              className={styles.delete}
            >
              Delete
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
