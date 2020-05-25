import React, {useState} from 'react';
import {Deal} from '../../constants';
import DealIcon from '../deal/deal';
import './card.scss'

const Card = (props) => {
    const [selected, setSelected] = useState(false);
    let isSelected = selected === true ? "selected" : "unselected";
    
    const value = props.value === Deal ? <DealIcon/> : props.value;
    console.log(props)
    return(
        <button name={props.value} className={`card card_${isSelected} card_${props.colour}`} onClick={() => setSelected(!selected)}>{value}</button>
    )
}

export default Card;