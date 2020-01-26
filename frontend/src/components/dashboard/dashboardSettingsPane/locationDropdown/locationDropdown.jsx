import React from "react";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";

const LocationDropdownComponent = (props) => {
  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '25vw',
  }
  const buttonStyle = {
    width: '180px',
  }

  const options = () => {
    let options = [];
    for(let i in props.places){
      options.push(
        <MDBDropdownItem onClick={() => props.title==='from' ? props.setFrom(props.places[i]): props.setTo(props.places[i])} >{props.places[i]}</MDBDropdownItem>
      )
    }
    return options;
  }

  return (
    <div style={buttonContainerStyle}>
      <MDBDropdown>
        <MDBDropdownToggle style={buttonStyle} caret color="primary">
          {props.title}
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
          {options()}
        </MDBDropdownMenu>
      </MDBDropdown>
    </div>
  );
};

export default LocationDropdownComponent;
