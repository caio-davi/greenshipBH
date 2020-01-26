import React from "react";

const WeightSelectorComponent = () => {
  const weightSelectorStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const [selectedWeight, setWeight] = React.useState(null);

  return (
    <div style={weightSelectorStyle}>
      <input type="number" placeholderText="Weight (Tons)" value={selectedWeight} onChange={(event) => {setWeight(event.target.value);}} />
    </div>
  );
};

export default WeightSelectorComponent;