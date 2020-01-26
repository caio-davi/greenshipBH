import React from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

const ConfirmationModalComponent = (props) => {
  return (
    <MDBContainer>
      <MDBModal isOpen={props.spawnModal}>
        <MDBModalHeader>Ship Confirmation</MDBModalHeader>
        <MDBModalBody>

          <h1>Owner:<b>{props.ship!== false && props.ship.owner.company}</b></h1>
          <h4>{props.ship!== false && props.ship.origin.city} to {props.ship!== false &&props.ship.destination.city}</h4>
          <h4>Departure Date: <b>{props.ship!== false && props.ship.departureTime}</b></h4>
          <h4>Arrival Date: <b>{props.ship!== false && props.ship.arrivalTime}</b></h4>
          Confirm??
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="warning" onClick={() => props.toggleModal()}>Close</MDBBtn>
          <MDBBtn color="default" onClick={() => props.goToPending(props.ship.shipNumber)}>Request Ship</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

export default ConfirmationModalComponent;