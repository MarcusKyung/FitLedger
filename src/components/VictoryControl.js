import React, { useState } from 'react';
import { Col, Button, Modal, Container, Row } from 'react-bootstrap';
import DailyWeightChart from './DailyWeightChart';
import WaterIntakeChart from './WaterIntakeChart';
import MacrobreakdownChart from './MacrobreakdownChart';
import TotalCaloriesChart from './TotalCaloriesChart';
import CardioBubbleChart from './CardioBubbleChart';
import SleepRatingChart from './SleepRatingChart';
import styled from 'styled-components';
import { FaRunning, FaUtensils, FaChartPie, FaWeight, FaWater, FaBed } from 'react-icons/fa';


const FullscreenModal = styled(Modal)`
  .modal-dialog {
    width: 100%;
    max-width: 100%;
    margin: 0;
    height: 100%;
    max-height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex !important;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
`;


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
              <Button variant="primary" onClick={handleWeightChartShow}>Daily Weight Chart | <FaWeight /></Button>
              <Button variant="primary" onClick={handleWaterIntakeChartShow}>Water Intake Chart | <FaWater /></Button>
              <Button variant="primary" onClick={handleMacrobreakdownChartShow}>Daily Macros Chart | <FaChartPie /></Button>
            </Row>
          </Col>
          <Col>
            <Row>
              <Button variant="primary" onClick={handleTotalCaloriesChartShow}>Total Calories Chart | <FaUtensils /></Button>
              <Button variant="primary" onClick={handleCardioBubbleChartShow}>Daily Cardio Chart | <FaRunning /></Button>
              <Button variant="primary" onClick={handleSleepRatingChartShow}>Sleep Rating Chart | <FaBed /></Button>
            </Row>
          </Col>
        </Row>
      </Container>


      <FullscreenModal show={showWeightChart} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>7/14 Day Daily Weight Chart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DailyWeightChart />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </FullscreenModal>

      <FullscreenModal show={showWaterIntakeChart} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>7/14 Day Daily Water Intake</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <WaterIntakeChart />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </FullscreenModal>

      <FullscreenModal show={showMacrobreakdownChart} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>7/14 Day Macronutrient Breakdown Chart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MacrobreakdownChart />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </FullscreenModal>

      <FullscreenModal show={showTotalCaloriesChart} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>7/14 Day Total Caloric Intake Chart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TotalCaloriesChart />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </FullscreenModal>

      <FullscreenModal show={showCardioBubbleChart} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>7/14 Day Cardio Distance/Duration Chart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CardioBubbleChart />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </FullscreenModal>

      <FullscreenModal show={showSleepRatingChart} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>7/14 Day Sleep Rating Chart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SleepRatingChart />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </FullscreenModal>

    </React.Fragment>
  );
}
