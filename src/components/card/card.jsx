import React from 'react';
import {Deal} from '../../constants';
import DealIcon from '../deal/deal';
import './card.scss'

const Card = (props) => {
    let className = props.selected === true ? "selected" : "unselected";
    
    const value = props.value === Deal ? <DealIcon/> : props.value;
    return(
        <button name={props.value} className={`card card_${props.colour}_${className}`} onClick={() => props.setAsSelected(props.reference)}>{value}</button>
    )
}

export default Card;