import styles from './styles/list.module.css';
import React, { useState, useEffect } from 'react';

const data = [
  {
    participants: [
      {
        name: 'tushar',
        email: 'xyz@gmail.com',
      },
      {
        name: 'vedant',
        email: 'ved@gmail.com',
      },
      {
        name: 'ayush',
        email: 'ayush@gmail.com',
      },
    ],
    startTime: 1627474833133,
    endTime: 1627474854089,
  },
  {
    participants: [
      {
        name: 'tushar',
        email: 'xyz@gmail.com',
      },
      {
        name: 'vedant',
        email: 'ved@gmail.com',
      },
      {
        name: 'ayush',
        email: 'ayush@gmail.com',
      },
    ],
    startTime: 1627474833133,
    endTime: 1627474854089,
  },
  {
    participants: [
      {
        name: 'tushar',
        email: 'xyz@gmail.com',
      },
      {
        name: 'vedant',
        email: 'ved@gmail.com',
      },
      {
        name: 'ayush',
        email: 'ayush@gmail.com',
      },
    ],
    startTime: 1627474833133,
    endTime: 1627474854089,
  },
  {
    participants: [
      {
        name: 'tushar',
        email: 'xyz@gmail.com',
      },
      {
        name: 'vedant',
        email: 'ved@gmail.com',
      },
      {
        name: 'ayush',
        email: 'ayush@gmail.com',
      },
    ],
    startTime: 1627474833133,
    endTime: 1627474854089,
  },
];

function List() {
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    setInterviews(data);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Scheduled Interviews</div>
      {interviews.map((interview, _index) => (
        <div className={styles.card}>
          <div className={styles.dateTime}>
            <div className='dateItem'>
              <h3>Start Date-Time</h3>
              {interview.startTime}
            </div>
            <div className='dateItem'>
              <h3>End Date-Time</h3>
              {interview.startTime}
            </div>
          </div>
          <div className={styles.participants}>
            <h2>Participants</h2>
            <div className={styles.listParticipants}>
              {interview.participants.map((participant, _index) => (
                <h3>{participant.name}</h3>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
