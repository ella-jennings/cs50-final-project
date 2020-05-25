import React, {useState} from 'react';
import Card from '../card/card.jsx'
import './city.css';
import {Deal} from '../../constants'


const City = (props) => {
    const [total, calculateTotal] = useState(0);
    const className = `city_${props.colour}`;
    return (
        <div className={`${className} city`}>
            <Card colour={props.colour} value={Deal}/>
            <Card colour={props.colour} value={Deal}/>
            <Card colour={props.colour} value={Deal}/>
            <Card colour={props.colour} value={2}/>
            <Card colour={props.colour} value={3}/>
            <Card colour={props.colour} value={4}/>
            <Card colour={props.colour} value={5}/>
            <Card colour={props.colour} value={6}/>
            <Card colour={props.colour} value={7}/>
            <Card colour={props.colour} value={8}/>
            <Card colour={props.colour} value={9}/>
            <Card colour={props.colour} value={10}/>
            <p>Total: {total}</p>
        </div>
    )
}

export const CalculateScore = (listOfValues) => {
    let score = 0;
    let multiplier = 1;
    if(listOfValues.length > 0) {
        score -= 20;
    }
    listOfValues.forEach(value => {
        if(value !== Deal) {
            score += value;
        }
    });

    const dealCards = listOfValues.filter(value =>  value === Deal);
    multiplier += dealCards.length;

    return score * multiplier;
}


export default City;