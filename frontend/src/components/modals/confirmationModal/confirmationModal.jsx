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
        <MDBModalHeader>ConfirmationModalComponent</MDBModalHeader>
        <MDBModalBody>

          <h2>{props.ship!== false && props.ship.owner.company}</h2>
          Confirm??
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="warning">Close</MDBBtn>
          <MDBBtn color="default" onClick={() => props.goToPending(props.ship.shipNumber)}>Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

export default ConfirmationModalComponent;