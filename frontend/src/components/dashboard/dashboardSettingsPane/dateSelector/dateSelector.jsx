import React from "react";
import DatePicker from "react-datepicker";

const DateSelectorComponent = () => {
  const dateSelectorStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '25vw',
  };

  const [startDate, setStartDate] = React.useState(new Date());
  
  return (
    <div style={dateSelectorStyle}>
      <span>
        Date:
      </span>
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    </div>
  );
};

export default DateSelectorComponent;