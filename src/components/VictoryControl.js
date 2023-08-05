import React, { useState } from 'react';
import { Col, Button, Modal, Container, Row } from 'react-bootstrap';
import DailyWeightChart from './DailyWeightChart';
import WaterIntakeChart from './WaterIntakeChart';
import MacrobreakdownChart from './MacrobreakdownChart';
import TotalCaloriesChart from './TotalCaloriesChart';
import CardioBubbleChart from './CardioBubbleChart';
import SleepRatingChart from './SleepRatingChart';

export default function Victory() {
  const [showWeightChart, setShowWeightChart] = useState(false);
  const [showWaterIntakeChart, setShowWaterIntakeChart] = useState(false);
  const [showMacrobreakdownChart, setShowMacrobreakdownChart] = useState(false);
  const [showTotalCaloriesChart, setShowTotalCaloriesChart] = useState(false);
  const [showCardioBubbleChart, setShowCardioBubbleChart] = useState(false);
  const [showSleepRatingChart, setshowSleepRatingChart] = useState(false);

  const handleClose = () => {
    setShowWeightChart(false);
    setShowWaterIntakeChart(false);
    setShowMacrobreakdownChart(false);
    setShowTotalCaloriesChart(false);
    setShowCardioBubbleChart(false);
    setshowSleepRatingChart(false);
  };

  const handleWeightChartShow = () => setShowWeightChart(true);
  const handleWaterIntakeChartShow = () => setShowWaterIntakeChart(true);
  const handleMacrobreakdownChartShow = () => setShowMacrobreakdownChart(true);
  const handleTotalCaloriesChartShow = () => setShowTotalCaloriesChart(true);
  const handleCardioBubbleChartShow = () => setShowCardioBubbleChart(true);
  const handleSleepRatingChartShow = () => setshowSleepRatingChart(true);

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <Row>
              <Button variant="primary" onClick={handleWeightChartShow}>Daily Weight Chart</Button>
              <Button variant="primary" onClick={handleWaterIntakeChartShow}>Water Intake Chart</Button>
              <Button variant="primary" onClick={handleMacrobreakdownChartShow}>Daily Macros Chart</Button>
            </Row>
          </Col>
          <Col>
            <Row>
              <Button variant="primary" onClick={handleTotalCaloriesChartShow}>Total Calories Chart</Button>
              <Button variant="primary" onClick={handleCardioBubbleChartShow}>Daily Cardio Chart</Button>
              <Button variant="primary" onClick={handleSleepRatingChartShow}>Sleep Rating Chart</Button>
            </Row>
          </Col>
        </Row>
      </Container>


      <Modal        dialogClassName="modal-90w" show={showWeightChart} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>7/14 Day Daily Weight Chart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DailyWeightChart />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showWaterIntakeChart} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>7/14 Day Daily Water Intake</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <WaterIntakeChart />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showMacrobreakdownChart} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>7/14 Day Macronutrient Breakdown Chart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MacrobreakdownChart />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showTotalCaloriesChart} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>7/14 Day Total Caloric Intake Chart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TotalCaloriesChart />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showCardioBubbleChart} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>7/14 Day Cardio Distance/Duration Chart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CardioBubbleChart />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showSleepRatingChart} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>7/14 Day Sleep Rating Chart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SleepRatingChart />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>

    </React.Fragment>
  );
}
