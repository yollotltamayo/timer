import React from 'react';

import './card-style.css';
import Mirror from '../Editor/EditorUI';
const Card = props => {
    return(
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="mi morrita y yo <3" className='card-img-top'/>
                
            </div>
        <div className ="card-body text-dark">
            <h4 className="card-title">{props.title}</h4>

            <p className="card-text text-secondary"> 
                yo y mi morrilla
            </p>
            <a href=<Mirror></Mirror> className="btn btn-outline-success">muaca</a>
        </div>
    </div>        
    );
}
export default Card;
