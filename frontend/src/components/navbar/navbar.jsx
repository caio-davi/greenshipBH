import React from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNav } from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faLeaf } from "@fortawesome/free-solid-svg-icons";

const NavbarComponent = () => {
  const logoContainerStyle = {
    display: "flex",
    flexDirection: "row"
  };
  const NavbarTitleStyle = {
    color: "white",
    fontFamily: "Georgia,Times,Times New Roman,serif",
    fontStyle: "italic",
    fontSize: "1.4em"
  };
  const logoStyle = {
    fontSize: "1.6em"
  };
  const logoNameStyle = {
    marginLeft: "10px"
  };
  const sustainabilityScoreStyle = {
    color: 'green',
  };

  return (
    <Router>
      <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarNav left>
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
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <div style={sustainabilityScoreStyle}>
            <strong>50,000</strong>
            <FontAwesomeIcon icon={faLeaf} />
          </div>
        </MDBNavbarNav>
      </MDBNavbar>
    </Router>
  );
};

export default NavbarComponent;
