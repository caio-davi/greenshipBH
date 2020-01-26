import React from "react";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

const NavbarComponent = () => {
  const logoContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
  };
  const NavbarTitleStyle = {
    color: 'white',
    fontFamily: 'Georgia,Times,Times New Roman,serif',
    fontStyle: 'italic',
    fontSize: '1.4em',
  };
  const logoStyle = {
    fontSize: '1.6em',
  };
  const logoNameStyle = {
    marginLeft: '10px',
  };

  return (
    <Router>
      <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
          <div style={logoContainerStyle}>
            <div style={logoStyle}>
              <FontAwesomeIcon icon={faTruck} />
            </div>
            <div style={logoNameStyle}>
            <strong style={NavbarTitleStyle}>GreenShip</strong>
            </div>
          </div>
        </MDBNavbarBrand>
      </MDBNavbar>
    </Router>
  );
};

export default NavbarComponent;