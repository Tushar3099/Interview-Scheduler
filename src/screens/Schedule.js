import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = ["one", "two", "three"];
const defaultOption = options[0];
function Schedule() {
  return (
    <>
      <div>
        <div>
          <h1>Candidates</h1>
          <Dropdown
            options={options}
            onChange={this._onSelect}
            value={defaultOption}
            placeholder="Select an option"
          />
        </div>
        <div>
          <h1>Interviewers</h1>
          <Dropdown
            options={options}
            onChange={this._onSelect}
            value={defaultOption}
            placeholder="Select an option"
          />
        </div>
      </div>
      <div>
        <div>
          <h1>Date & Time</h1>
        </div>
      </div>
      <div>Schedule</div>
    </>
  );
}

export default Schedule;
