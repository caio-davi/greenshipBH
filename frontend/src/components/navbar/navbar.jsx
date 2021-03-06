import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink
} from "mdbreact";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faLeaf,
  faCheck,
  faSearch,
  faList
} from "@fortawesome/free-solid-svg-icons";

const NavbarComponent = (props) => {
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
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "green"
  };
  const navbarLinksStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  };
  const faAppenderStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  };
  const spacerStyle = {
    width: "5px"
  };

  return (
      <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarNav left>
          <MDBNavbarBrand>
          <MDBNavLink tag={Link} to="/">
            <div style={logoContainerStyle}>
              <div style={logoStyle}>
                <FontAwesomeIcon icon={faTruck} />
              </div>
              <div style={logoNameStyle}>
                <strong style={NavbarTitleStyle}>GreenShip</strong>
              </div>
            </div>
              </MDBNavLink>
          </MDBNavbarBrand>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <div style={navbarLinksStyle}>
            <MDBNavItem>
              <MDBNavLink tag={Link} to="/">
                <div style={faAppenderStyle}>
                  <FontAwesomeIcon icon={faList} />
                  <div style={spacerStyle} />
                  Scheduling
                </div>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink tag={Link} to="/pending">
                <div style={faAppenderStyle}>
                  <FontAwesomeIcon icon={faSearch} />
                  <div style={spacerStyle} />
                  Pending
                </div>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink tag={Link} to="/approvals">
                <div style={faAppenderStyle}>
                  <FontAwesomeIcon icon={faCheck} />
                  <div style={spacerStyle} />
                  Approvals
                </div>
              </MDBNavLink>
            </MDBNavItem>
          </div>
          <div style={spacerStyle} />
          <div style={sustainabilityScoreStyle}>
            <strong>{props.userBalance}</strong>
            <div style={spacerStyle} />
            <FontAwesomeIcon icon={faLeaf} />
          </div>
        </MDBNavbarNav>
      </MDBNavbar>
  );
};

export default NavbarComponent;
