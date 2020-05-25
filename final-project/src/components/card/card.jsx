import React from 'react';
import {Deal} from '../../constants';
import DealIcon from '../deal/deal';
import './card.scss'

const Card = (props) => {
    console.log(props);
    let className = props.selected === true ? "selected" : "unselected";
    const changeSelected = () => {
        console.log('got here');
        props.setAsSelected(props.reference);
    }
    
    const value = props.value === Deal ? <DealIcon/> : props.value;
    console.log(props)
    return(
        <button name={props.value} className={`card card_${className} card_${props.colour}`} onClick={() => changeSelected()}>{value}</button>
    )
}

export default Card;