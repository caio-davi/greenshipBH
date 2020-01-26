import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faCheck, faBan } from "@fortawesome/free-solid-svg-icons";

const ApprovalsRowComponent = props => {
  const approvalsRowStyle = {
    display: "flex",
    flexDirection: "row",
    marginTop: "20px",
    width: "95%",
    height: "175px",
    backgroundColor: "#FFFFFF",
    fontSize: "1.1em"
  };
  const logoContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "15%"
  };
  const nameAndLocationContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "30%"
  };
  const deliveryDateContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "10%"
  };
  const sustainabilityScoreContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "25%"
  };
  const approvalLinkStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "10%",
    fontSize: "1.4em",
    color: "green"
  };
  const rejectLinkStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "10%",
    fontSize: "1.4em",
    color: "red"
  };
  const headingStyle = {
    fontSize: "1.6em"
  };
  const subheadingStyle = {
    color: "grey",
    fontStyle: "italic"
  };
  const sustainabilityScoreStyle = {
    color: "#81BB2B",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  };
  const spacerStyle = {
    width: "5px"
  };

  if (props.approved) {
    return (
      <div style={approvalsRowStyle}>
        <div style={logoContainerStyle}>
          <img src={props.companyLogo} alt={"companyLogo"} />
        </div>
        <div style={nameAndLocationContainerStyle}>
          <div>
            <div style={headingStyle}>{props.companyName}</div>
            <div style={subheadingStyle}>
              {props.companyLocationFrom} → {props.companyLocationTo}
            </div>
          </div>
        </div>
        <div style={deliveryDateContainerStyle}>{props.deliveryDate}</div>
        <div style={sustainabilityScoreContainerStyle}>
          <div style={sustainabilityScoreStyle}>
            {props.sustainabilityScore}
            <div style={spacerStyle} />
            <FontAwesomeIcon icon={faLeaf} />
          </div>
        </div>
        <div style={approvalLinkStyle}>
          Approved
          <div style={spacerStyle} />
          <FontAwesomeIcon icon={faCheck} />
        </div>
      </div>
    );
  } else {
    return (
      <div style={approvalsRowStyle}>
        <div style={logoContainerStyle}>
          <img src={props.companyLogo} alt={"companyLogo"} />
        </div>
        <div style={nameAndLocationContainerStyle}>
          <div>
            <div style={headingStyle}>{props.companyName}</div>
            <div style={subheadingStyle}>
              {props.companyLocationFrom} → {props.companyLocationTo}
            </div>
          </div>
        </div>
        <div style={deliveryDateContainerStyle}>{props.deliveryDate}</div>
        <div style={sustainabilityScoreContainerStyle}>
          <div style={sustainabilityScoreStyle}>
            {props.sustainabilityScore}
            <div style={spacerStyle} />
            <FontAwesomeIcon icon={faLeaf} />
          </div>
        </div>
        <div style={rejectLinkStyle}>
          Rejected
          <div style={spacerStyle} />
          <FontAwesomeIcon icon={faBan} />
        </div>
      </div>
    );
  }
};

export default ApprovalsRowComponent;
