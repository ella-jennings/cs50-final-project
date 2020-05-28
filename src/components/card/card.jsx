import React from 'react';
import DealIcon from '../deal/deal';
import './card.scss'

const Card = (props) => {
    let className = props.selected === true ? "--selected" : "";
    const cardValue = props.value.toString().includes("Deal") ? <DealIcon className={className}/> : props.value;

    return(
        <button name={props.value} className={`card card_${props.colour} card${className}`} onClick={() => props.setAsSelected(props.value)}>
            <span className={"value"}>
                {cardValue}
            </span>    
        </button>
    )
}

export default Card;