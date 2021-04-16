import React from 'react';
import './Pokemon.css';

function Pokemon(props) {
    return (
        <div className="Pokemon">
            <h1>HP:{props.hp}</h1>
            <div className="image-container">
                <img src={props.pokemon} />
            </div>
            <button onClick={() => props.attack(props.name)}>Attack</button>
        </div>
    )
}

export default Pokemon;