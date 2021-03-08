import React, { useState } from "react";
import SimpleReactCalendar from "simple-react-calendar";

const CustomCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <SimpleReactCalendar onChange={onChange} value={value} />
    </div>
  );
};

export default CustomCalendar;
