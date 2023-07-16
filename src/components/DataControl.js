import React, { useEffect, useState } from "react";
import NewDataForm from './NewDataForm'
import DataList from './DataList'
import DataDetail from './DataDetail'
import EditDataForm from './EditDataForm'
import { db, auth } from "./../firebase.js";
import { collection, addDoc, doc, updateDoc, onSnapshot, deleteDoc, query, where, orderBy } from "firebase/firestore"; //Import Firestore helper functions
import { formatDistanceToNow } from 'date-fns';

function DataControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainDataList, setMainDataList] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);


  if (auth.currentUser == null) {
    return (
      <React.Fragment>
        <Row>
          <Col />
          <Col>
            <h1 style={{ color: "red" , marginTop: "1em"}}>You must be signed in to access the queue!</h1>
          </Col>
          <Col />
        </Row>
      </React.Fragment>
    );
  } else if (auth.currentUser != null) {
    let currentlyVisibleState = null;
    let buttonText = null;

  return (
    <React.Fragment>
      {currentlyVisibleState}
      <ButtonGroup>
        {error ? null : <Button variant="primary" onClick={handleClick}>{buttonText}</Button>}
      </ButtonGroup>
    </React.Fragment>
    );
  }
}

export default TicketControl;

