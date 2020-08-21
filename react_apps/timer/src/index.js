import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import  Mix from './Mix'
import * as serviceWorker from './serviceWorker';
import"../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
     /* 1. Initialize Ref */
ReactDOM.render(
  <React.StrictMode>
      <Container fluid>
          <Row>
              
          </Row>
          <Row>
              <Col>
          <Mix></Mix>
                
              </Col>
          </Row>
      </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
