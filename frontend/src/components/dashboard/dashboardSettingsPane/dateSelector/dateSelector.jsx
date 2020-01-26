import React from "react";
import DatePicker from "react-datepicker";

const DateSelectorComponent = () => {
  const dateSelectorStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const [startDate, setStartDate] = React.useState(new Date());
  
  return (
    <div style={dateSelectorStyle}>
      <DatePicker placeholderText="Date" selected={startDate} onChange={date => setStartDate(date)} />
    </div>
  );
};

export default DateSelectorComponent;