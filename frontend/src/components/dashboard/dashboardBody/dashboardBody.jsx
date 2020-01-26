import React from "react";
import CompanyRowComponent from "./companyRow/companyRow";

const DashboardBodyComponent = () => {
  const dashboardBodyStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#AAFFAA",
    width: "82%"
  };

  return (
    <div style={dashboardBodyStyle}>
      <CompanyRowComponent
        companyLogo={"test.jpg"}
        companyName={"Texas A&M University"}
        companyLocation={"College Station, TX"}
        deliveryDate={"6:00 PM CST 1/29/20"}
        sustainabilityScore={"340ss"}
      />
      <CompanyRowComponent
        companyLogo={"test1.jpg"}
        companyName={"Texas A&M University"}
        companyLocation={"College Station, TX"}
        deliveryDate={"6:00 PM CST 1/29/20"}
        sustainabilityScore={"340ss"}
      />
    </div>
  );
};

export default DashboardBodyComponent;
