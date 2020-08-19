import React from 'react';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import img5 from '../assets/img5.jpeg'
import lil_cat from '../assets/lil_cat.png'
import resume from '../assets/resume.pdf'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import './header-style.css'
export const Header = () =>{
    return (
        <Container>
        <Jumbotron>
            <Container  >
            <Row className = "row">
                <Col>
                        <h1 class="font2">Yollotl  Tamayo</h1>  
                    <div class="typewriter">
                        <h2 class="font">>In love with 
                        <span class="animated">

                    </span>
                    </h2>
                    </div>
                    <br></br>
                    <Container>
                        <Row xs={3} md={4} lg={9}>
                            <Col>
                            <a href = "https://github.com/yollotltamayo" target="_blank"><img  class = "img"src = {lil_cat} /></a>
                            </Col>
                            <Col>
                                <Button size = "lg" href ={resume} className = "font"  target="_blank"style = {{backgroundColor :'black' ,borderColor: 'black'  ,colorrText:'transparent'}} >My resume </Button>
                            </Col>
                        </Row>
                    </Container>
                </Col>

                <Col md = "auto"> 
                    <div class="image-cropper">
                    <Image  md = "auto"src= {img5} alt = "me" responsive/>
                    </div>
                </Col>
                </Row>
            </Container>
            </Jumbotron>
        </Container>
)
}
export default Header;
