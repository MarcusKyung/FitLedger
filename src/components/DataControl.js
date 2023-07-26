import React, { useEffect, useState } from "react";
import NewDataForm from './NewDataForm'
import DataList from './DataList'
import DataDetails from './DataDetails'
import EditDataForm from './EditDataForm'
import { db, auth } from "./../firebase.js";
import { collection, setDoc, doc, updateDoc, onSnapshot, deleteDoc, query, where } from "firebase/firestore"; 
import { Container, Row, Col, Button, ButtonGroup, Card } from 'react-bootstrap';
import DailyQuote from './DailyQuote';
import Victory from './Victory';

function DataControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainDataList, setMainDataList] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let queryRef;
  
    if (auth.currentUser !== null) { 
      console.log(auth.currentUser.email);
      queryRef = query(collection(db, "data"), where("author", "==", auth.currentUser.email)); 
    } else {  
      queryRef = collection(db, "data");
    }
  
    const unSubscribe = onSnapshot(
      queryRef,
      (collectionSnapshot) => {
        const data = [];
        collectionSnapshot.forEach((doc) => {
          data.push({
            entryDate: doc.data().entryDate,
            meal1Name: doc.data().meal1Name,
              meal1Calories: doc.data().meal1Calories,
              meal1Protein: doc.data().meal1Protein,
              meal1Carbs: doc.data().meal1Carbs,
              meal1Fats: doc.data().meal1Fats,
            meal2Name: doc.data().meal2Name,
              meal2Calories: doc.data().meal2Calories,
              meal2Protein: doc.data().meal2Protein,
              meal2Carbs: doc.data().meal2Carbs,
              meal2Fats: doc.data().meal2Fats,
            meal3Name: doc.data().meal3Name,
              meal3Calories: doc.data().meal3Calories,
              meal3Protein: doc.data().meal3Protein,
              meal3Carbs: doc.data().meal3Carbs,
              meal3Fats: doc.data().meal3Fats,
            waterIntake: doc.data().waterIntake,
            supplement1Name: doc.data().supplement1Name,
              supplement1Amount: doc.data().supplement1Amount,
            supplement2Name: doc.data().supplement2Name,
              supplement2Amount: doc.data().supplement2Amount,
            supplement3Name: doc.data().supplement3Name,
              supplement3Amount: doc.data().supplement3Amount,
            exercise1Name: doc.data().exercise1Name,
              exercise1Sets: doc.data().exercise1Sets,
              exercise1Reps: doc.data().exercise1Reps,
              exercise1Weight: doc.data().exercise1Weight,
              exercise1Notes: doc.data().exercise1Notes,
            exercise2Name: doc.data().exercise2Name,
              exercise2Sets: doc.data().exercise2Sets,
              exercise2Reps: doc.data().exercise2Reps,
              exercise2Weight: doc.data().exercise2Weight,
              exercise2Notes: doc.data().exercise2Notes,
            exercise3Name: doc.data().exercise3Name,
              exercise3Sets: doc.data().exercise3Sets,
              exercise3Reps: doc.data().exercise3Reps,
              exercise3Weight: doc.data().exercise3Weight,
              exercise3Notes: doc.data().exercise3Notes,
            exercise4Name: doc.data().exercise4Name,
              exercise4Sets: doc.data().exercise4Sets,
              exercise4Reps: doc.data().exercise4Reps,
              exercise4Weight: doc.data().exercise4Weight,
              exercise4Notes: doc.data().exercise4Notes,
            exercise5Name: doc.data().exercise5Name,
              exercise5Sets: doc.data().exercise5Sets,
              exercise5Reps: doc.data().exercise5Reps,
              exercise5Weight: doc.data().exercise5Weight,
              exercise5Notes: doc.data().exercise5Notes,
            cardioName: doc.data().cardioName,
              cardioDuration: doc.data().cardioDuration,
              cardioDistance: doc.data().cardioDistance,
              cardioNotes: doc.data().cardioNotes,
            sleepTime: doc.data().sleepTime,
            wakeTime: doc.data().wakeTime,
            sleepQuality: doc.data().sleepQuality,
            sleepScore: doc.data().sleepScore,
            dailyWeight: doc.data().dailyWeight,
            dailyStatus: doc.data().dailyStatus,
            id: doc.id,
            author: doc.data().author,
            totalCalories: doc.data().totalCalories,
            totalProtein: doc.data().totalProtein,
            totalCarbs: doc.data().totalCarbs,
            totalFats: doc.data().totalFats,
          });
        });
        data.sort((a, b) => new Date(b.entryDate) - new Date(a.entryDate));
        setMainDataList(data);
      },
      (error) => {
        setError(error.message);
      }
    );
    setMainDataList([]);

    return () => unSubscribe;
  }, [auth.currentUser]);

  const handleClick = () => {
    if (selectedData != null) {
      setFormVisibleOnPage(false);
      setSelectedData(null);
      setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage); 
    }
  };

  const handleDeletingData = async (id) => {
    await deleteDoc(doc(db, "data", id));
    setSelectedData(null);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleEditingDataInList = async (dataToEdit) => {
    const dataRef = doc(db, "data", dataToEdit.id); 
    await updateDoc(dataRef, dataToEdit); 
    setEditing(false);
    setSelectedData(null);
  };

  const handleAddingNewDataToList = async (newDataEntry) => {
    newDataEntry.author = auth.currentUser.email;
    const dataId = newDataEntry.entryDate;
    const dataRef = doc(db, "data", dataId);
    await setDoc(dataRef, newDataEntry);
    setFormVisibleOnPage(false); 
  };

  const handleChangingSelectedData = (id) => {
    const selection = mainDataList.filter((data) => data.id === id)[0];
    setSelectedData(selection);
  };

  if (auth.currentUser == null) {
    return (
      <Container fluid className="d-flex justify-content-center align-items-center vh-100">
        <Row className="justify-content-center">
          <Col>
            <Card style={{ paddingBottom: "50px", paddingTop: "50px", paddingLeft: "200px", paddingRight: "200px"  }}>
              <h1 style={{ textAlign: "center"}}>You must be signed in to access entries</h1>
              <DailyQuote />
            </Card>
          </Col>
        </Row>
      </Container>
    );

  } else if (auth.currentUser != null) {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (error) {
      currentlyVisibleState = <p>There was an error: {error}</p>; 
    } else if (editing) {
      currentlyVisibleState = (
        <EditDataForm
          data={selectedData}
          onEditData={handleEditingDataInList}
        />
      );
      buttonText = "Return to Entry List";
    } else if (selectedData != null) {
      currentlyVisibleState = (
        <DataDetails
          data={selectedData}
          onClickingDelete={handleDeletingData}
          onClickingEdit={handleEditClick}
        />
      );
      buttonText = "Return to entry List";
    } else if (formVisibleOnPage) {
      currentlyVisibleState = (
        <NewDataForm onNewDataCreation={handleAddingNewDataToList} />
      );
      buttonText = "Return to entry List";
    } else {
      currentlyVisibleState = (
        <DataList
          onDataSelection={handleChangingSelectedData}
          dataList={mainDataList}
        />
      );
      buttonText = "Add Data Entry";
    }

    return (
      <React.Fragment>
        <hr />
        <Victory />
        <Container>
          <div style={{ textAlign: "center" }}>
            <ButtonGroup style={{ width: "100%", padding: 0 }}>
              {error ? null : <Button variant="primary" onClick={handleClick}>{buttonText}</Button>}
            </ButtonGroup>
          </div>
        </Container>
        {currentlyVisibleState}

      </React.Fragment>
    );
  }
}

export default DataControl;