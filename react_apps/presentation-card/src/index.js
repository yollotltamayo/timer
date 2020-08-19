import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import"../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import Cardse from  './Cads/Cards';
import Mirror from './Editor/EditorUI';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import Header from './Header/Header';
import './Cads/card-style.css';
ReactDOM.render(
  <React.StrictMode>
      <Container>
    <Header></Header>
      <Row>
          <Col>
          <center><h1 class="font2">PROJECTS</h1></center>
              <br></br>
          </Col>
        </Row>
    <Container className = "bg">
        <Row>
            <Col>
                <Cardse></Cardse>
            </Col>
        </Row>
    </Container>
      </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
