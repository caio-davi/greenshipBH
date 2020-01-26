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
        <MDBModalBody>test</MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="warning">Close</MDBBtn>
          <MDBBtn color="default">Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

export default ConfirmationModalComponent;
