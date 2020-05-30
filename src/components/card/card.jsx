import React from 'react';
import DealIcon from '../deal/deal';
import './card.scss'

const Card = (props) => {
    let className = props.selected === true ? "--selected" : "";
    const cardValue = props.value.toString().includes("Deal") ? <DealIcon className={className}/> : props.value;

    return(
        <button name={props.value} className={`card card_${props.colour} card${className}`} onClick={() => props.setAsSelected(props.value)}>
            <div className={"value value_small"}>
                {cardValue}
            </div>
            <div className={"value value_large"}>
                {cardValue}
            </div>    
        </button>
    )
}

export default Card;