import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Events.css";
import StaticDatePicker from "@material-ui/lab/StaticDatePicker";
import TextField from "@material-ui/core/TextField";

const Events = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className=" col-xs-12 col-md-auto px-0">
          <h1 style={{ color: "#0065B2" }}>Events & Calendar</h1>
          <img
            src="/images/drinks.jpg"
            style={{
              width: "80%",
              height: "78%",
            }}
          />
        </div>
        <div className=" col-xs-12 col-md-auto mt-5 px-0  ">
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            openTo="year"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} variant="standard" />
            )}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div
          className="col-2"
          style={{
            fontWeight: "bold",
            color: "grey",
            textDecoration: "underline",
          }}
        >
          {" "}
          SEE CALENDAR
        </div>
      </div>
    </div>
  );
};

export default Events;
