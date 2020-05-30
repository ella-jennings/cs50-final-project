import React from 'react';
import DealIcon from '../deal/deal';
import './card.scss'

const Card = (props) => {
    let className = props.selected === true ? "--selected" : "";
    const cardValue = props.value.toString().includes("Deal") ? <DealIcon className={className}/> : props.value;

    return(
        <button name={props.value} className={`card card--${props.colour} card${className}`} onClick={() => props.setAsSelected(props.value)}>
            <div className={"card_value card_value--small"}>
                {cardValue}
            </div>
            <div className={"card_value card_value--large"}>
                {cardValue}
            </div>    
        </button>
    )
}

export default Card;