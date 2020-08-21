import React, {Component, useEffect, useState } from "react";
import "./App.css";
import Alert from 'react-bootstrap/Alert'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

function App(props) {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${props.year}`) - +new Date(); // year month day
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
          Days:[ Math.floor(difference / (1000 * 60 * 60 * 24))," : "],
          Hours: [Math.floor((difference / (1000 * 60 * 60)) % 24)," : "],
          Minutes: [Math.floor((difference / 1000 / 60) % 60)," : "],
        Seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];
  Object.keys(timeLeft).forEach(function(interval,idx) {
    /*if (!timeLeft[interval]) {
      return;
    }*/
    timerComponents.push(
        <>
            {timeLeft[interval]}
        </>
    );
  })
  return (
    <div>
        <center><h1 class = "change-font">Tiempo para el cumpleaños de<span class= "color-text"> {props.name}</span></h1></center>
    <Jumbotron className ="font">
        <Container fluid>
            <Row>
                <Col>
                <center><h1 class= "big-text" >{timerComponents.length ? timerComponents:<span>Time's up!</span>}</h1></center>
                </Col>
            </Row>
        </Container>
        </Jumbotron>
    </div>
  )
    }
export default App;

