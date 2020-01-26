import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faCheck, faBan } from "@fortawesome/free-solid-svg-icons";

const PendingRowComponent = props => {
  const pendingRowStyle = {
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
    color: "#2B81BB"
  };
  const rejectLinkStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "10%",
    color: "#BB2B81"
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
  const textLinkStyle = {
    cursor: "pointer"
  };

  return (
    <div style={pendingRowStyle}>
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
        <FontAwesomeIcon icon={faCheck} />
        <div style={spacerStyle} />
        <div style={textLinkStyle}>Approve</div>
      </div>
      <div style={rejectLinkStyle}>
        <FontAwesomeIcon icon={faBan} />
        <div style={spacerStyle} />
        <div style={textLinkStyle}>Reject</div>
      </div>
    </div>
  );
};

export default PendingRowComponent;
