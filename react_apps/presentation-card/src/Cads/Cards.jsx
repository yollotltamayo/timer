import React,{Component} from 'react'
import Card from 'react-bootstrap/Card'
//import Card from './CardUI';
import CardColumns from 'react-bootstrap/CardColumns'
import CardDeck from 'react-bootstrap/CardDeck'
import Data from '../Data/Data'
//import Col from 'react-bootstrap/Col'
//import './card-sty
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import cat from '../assets/custom.png'
import cat2 from '../assets/github.jpg'
const Cardses= () => {
    const render = (card,index ) => {
            return (
                <Card style = {{ backgroundColor : 'white' }}>
                    <Card.Img  src = {card.image}/>
                    <Card.Body>
                        <Card.Title><center><h2>{card.title}</h2></center></Card.Title>
                    <Card.Text>
                        {card.text}
                    </Card.Text>
                    {
                        card.tag == true &&
                            <center><Card.Footer><Button href={card.link} target="_blank" variant="primary" size="lg">Check it out!</Button>{' '}</Card.Footer></center>
                    }
                    </Card.Body>
                </Card>

            );
    };
    return Data.map(render)

};
const Cardse = () => {
    return(
        <CardColumns>
            <Cardses></Cardses>
            <Card >
        <Card.Body >
            <Card.Img src={cat} alt="Card image"/>
        </Card.Body>
                <h4>
                    <a target="_blank" href = "https://github.com/yollotltamayo">
                <center><small className="text-muted">Check my github</small></center>
                    </a>
                </h4>
        </Card>
        </CardColumns>
    )
}
            
export default Cardse;
