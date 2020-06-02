import React from 'react';
import DealIcon from '../deal/deal';
import './card.scss'

const Card = (props: baseProps) => {
    let className = props.selected === true ? "--selected" : "";
    const cardValue = props.value.toString().includes("Deal") ? <DealIcon className={className}/> : props.value;

    return(
        <button name={props.value} className={`card card_${props.value} card--${props.colour} card${className}`} onClick={() => props.setAsSelected(props.value)}>
            <div className={"card_value card_value--small"}>
                {cardValue}
            </div>
            <div className={"card_value card_value--large"}>
                {cardValue}
            </div>    
        </button>
    )
}

type baseProps = {
    colour: string,
    selected: boolean,
    setAsSelected: (value: string) => {},
    value: string
}
export default Card;