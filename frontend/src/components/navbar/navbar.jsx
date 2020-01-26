import React from "react";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

const NavbarComponent = () => {
  const NavbarTitleStyle = {
    color: 'white',
    fontFamily: 'Georgia,Times,Times New Roman,serif',
    fontStyle: 'italic',
    fontSize: '1.4em',
  };

  return (
    <Router>
      <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
          <strong style={NavbarTitleStyle}>GreenShip</strong>
        </MDBNavbarBrand>
      </MDBNavbar>
    </Router>
  );
};

export default NavbarComponent;