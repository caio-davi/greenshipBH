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
        companyLogo={"goodGuys.jpg"}
        companyName={"Texas A&M University"}
        companyLocation={"College Station, TX"}
        deliveryDate={"6:00 PM CST 1/29/20"}
        sustainabilityScore={"340ss"}
      />
      <CompanyRowComponent
        companyLogo={"../../../assets/pictures/hornsDown.jpg"}
        companyName={"texas university"}
        companyLocation={"Austin, TX"}
        deliveryDate={"5:10 PM CST 1/29/20"}
        sustainabilityScore={"210ss"}
      />
      <CompanyRowComponent
        companyLogo={"bakerHughes.jpg"}
        companyName={"Baker Hughes"}
        companyLocation={"Houston, TX"}
        deliveryDate={"1:20 PM CST 1/30/20"}
        sustainabilityScore={"432ss"}
      />
    </div>
  );
};

export default DashboardBodyComponent;
