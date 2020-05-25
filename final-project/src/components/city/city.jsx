import React, {useState} from 'react';
import Card from '../card/card.jsx'
import './city.css';
import {Deal, InitialCards} from '../../constants'



const City = (props) => {
    const [cards, updateCards] = useState(InitialCards);

    const setSelected = (value) => {
        let newCards = {...cards};
        newCards[value].selected = !newCards[value].selected;
        updateCards(newCards);

        let array = [];
        for (var key in cards)
        {
            if(cards[key].selected){
                array.push(cards[key].value);
            }
        }
        const total = CalculateScore(array);
        calculateTotal(total);
    }
    const [total, calculateTotal] = useState(0);
    const genericProps = {
        setAsSelected: (value) => setSelected(value),
        colour: props.colour,
    }
    const className = `city_${props.colour}`;
    return (
        <div className={`${className} city`}>
            <Card {...genericProps} {...cards.Deal1}/>
            <Card {...genericProps} {...cards.Deal2}/>
            <Card {...genericProps} {...cards.Deal3}/>
            <Card {...genericProps} {...cards[2]}/>
            <Card {...genericProps} {...cards[3]}/>
            <Card {...genericProps} {...cards[4]}/>
            <Card {...genericProps} {...cards[5]}/>
            <Card {...genericProps} {...cards[6]}/>
            <Card {...genericProps} {...cards[7]}/>
            <Card {...genericProps} {...cards[8]}/>
            <Card {...genericProps} {...cards[9]}/>
            <Card {...genericProps} {...cards[10]}/>
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