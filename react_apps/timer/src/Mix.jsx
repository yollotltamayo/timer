import Container from 'react-bootstrap/Container'
import React, {Component, useEffect, useState } from "react";
import App from './App'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import"../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './mix-style.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
class Mix extends Component{
    constructor(props) {
    super(props);
        this.state = {
            inputValue : 'Yollotl',
            year:'2020-10-21'
        };
    }


    handleChange = () =>{
     /* 3. Get Ref Value here (or anywhere in the code!) */
     this.value =  this.textInput.current.value;   
        console.log(this.value);
    }
     updateInputValue(evt) {
    this.setState({
    inputValue: evt.target.value
        });
    }
     updateYear(evt) {
    this.setState({
    year: evt.target.value
        });
    }

    render(){
        return(
            <>
                <App name = {this.state.inputValue} year = {this.state.year}/>
                <h2>¿De quien es cumpleaños?</h2>
                <center><input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/></center>
                <h2>¿Cuando es el cumpleaños?</h2>
                <br></br>
                <h4>Formato (YYYY-MM-DD)</h4>
                <center><input value={this.state.year} onChange={evt => this.updateYear(evt)}/></center>
            </>
        )
    }
}
export default Mix;
