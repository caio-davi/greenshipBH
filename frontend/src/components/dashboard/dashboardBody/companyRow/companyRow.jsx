import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

const CompanyRowComponent = (props) => {
  const companyRowStyle = {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '20px',
    width: '80%',
    height: '175px',
    backgroundColor: '#FFFFFF',
    fontSize: '1.1em',
  };
  const logoContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
  };
  const nameAndLocationContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
  };
  const deliveryDateContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
  };
  const sustainabilityScoreContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',
  };
  const headingStyle = {
    fontSize: '1.6em',
  };
  const subheadingStyle = {
    color: 'grey',
    fontStyle: 'italic',
  };
  const sustainabilityScoreStyle = {
    color: 'green',
  };

  return (
    <div style={companyRowStyle}>
      <div style={logoContainerStyle}>
        <img src={props.companyLogo} />
      </div>
      <div style={nameAndLocationContainerStyle}>
        <div>
          <div style={headingStyle}>
            {props.companyName}
          </div>
          <div style={subheadingStyle}>
            {props.companyLocationFrom} -> {props.companyLocationTo} 
          </div>
        </div>
      </div>
      <div style={deliveryDateContainerStyle}>
        {props.deliveryDate}
      </div>
      <div style={sustainabilityScoreContainerStyle}>
        <div style={sustainabilityScoreStyle}>
          {props.sustainabilityScore}
          <FontAwesomeIcon icon={faLeaf} />
        </div>
      </div>
    </div>
  );
};

export default CompanyRowComponent;