import styles from "./styles/list.module.css";
import React, { useState, useEffect } from "react";
import Moment, { MomentProps } from "react-moment";

const data = [
  {
    participants: [
      {
        name: "tushar",
        email: "xyz@gmail.com",
      },
      {
        name: "vedant",
        email: "ved@gmail.com",
      },
      {
        name: "ayush",
        email: "ayush@gmail.com",
      },
      {
        name: "shweta",
        email: "ayush@gmail.com",
      },
    ],
    startTime: 1627474833133,
    endTime: 818035920000,
  },
  {
    participants: [
      {
        name: "tushar",
        email: "xyz@gmail.com",
      },
      {
        name: "vedant",
        email: "ved@gmail.com",
      },
      {
        name: "ayush",
        email: "ayush@gmail.com",
      },
    ],
    startTime: 1627474833133,
    endTime: 1627474854089,
  },
  {
    participants: [
      {
        name: "tushar",
        email: "xyz@gmail.com",
      },
      {
        name: "vedant",
        email: "ved@gmail.com",
      },
      {
        name: "ayush",
        email: "ayush@gmail.com",
      },
    ],
    startTime: 1627474833133,
    endTime: 1627474854089,
  },
  {
    participants: [
      {
        name: "tushar",
        email: "xyz@gmail.com",
      },
      {
        name: "vedant",
        email: "ved@gmail.com",
      },
      {
        name: "ayush",
        email: "ayush@gmail.com",
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
      <div className={styles.heading}>Upcoming Interviews</div>
      {interviews.map((interview, _index) => (
        <div className={styles.card}>
          <div className={styles.dateTime}>
            <div className={styles.dateItem}>
              <h3>Start Date-Time</h3>
              {/* {console.log(interview.startTime)} */}
              <Moment
                className={styles.formatDate}
                date={interview.startTime}
                format="YYYY/MM/DD"
              />
              <Moment
                className={styles.formatDate}
                date={interview.endTime}
                format="hh:mm:ss"
              />
            </div>
            <div className={styles.dateItem}>
              <h3>End Date-Time</h3>
              {console.log(interview.endTime)}
              <Moment
                className={styles.formatDate}
                date={interview.startTime}
                format="YYYY/MM/DD"
              />
              <Moment
                className={styles.formatDate}
                date={interview.endTime}
                format="hh:mm:ss"
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
        </div>
      ))}
    </div>
  );
}

export default List;
