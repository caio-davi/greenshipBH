import React from "react";

const WeightSelectorComponent = () => {
  const weightSelectorStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '25vw',
  };

  const inputStyle = {
    width: '180px',
  }

  const [selectedWeight, setWeight] = React.useState('');

  return (
    <div style={weightSelectorStyle}>
      <span>
        Weight (Tons):
      </span>
      <input style={inputStyle} type="number"value={selectedWeight} onChange={(event) => {setWeight(event.target.value);}} />
    </div>
  );
};

export default WeightSelectorComponent;