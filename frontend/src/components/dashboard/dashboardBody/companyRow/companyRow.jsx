import React from "react";

const CompanyRowComponent = (props) => {
  const companyRowStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
    width: '80%',
    height: '175px',
    backgroundColor: '#FFFFFF',
  };

  return (
    <div style={companyRowStyle}>
      {props.companyLogo} {props.companyName} {props.companyLocation} {props.deliveryDate} {props.sustainabilityScore}
    </div>
  );
};

export default CompanyRowComponent;