import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";

function Data(props){

  return (
    <React.Fragment>
      <Row>
        <Col />
        <Col xs={6}>
          <Card onClick = {() => props.whenDataClicked(props.id)}> 
            <h1 style={{textAlign: "center"}}>{props.entryDate}</h1>
          </Card>
          <hr />
        </Col>
        <Col />
      </Row>
    </React.Fragment>
  );
}

Data.propTypes = {
  entryDate: PropTypes.string,
  id: PropTypes.string,
  whenDataClicked: PropTypes.func
}

export default Data;