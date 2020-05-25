import React, {useState} from 'react';
import Card from '../card/card.jsx'
import './city.css';
import {Deal} from '../../constants'

const InitialCards = {
    Deal1: {
        selected: false,
        value: Deal,
        reference: "Deal1",
    },
    Deal2: {
        selected: false,
        value: Deal,
        reference: "Deal2",
    },
    Deal3: {
        selected: false,
        value: Deal,
        reference: "Deal3",
    },
    2: {
        selected: false,
        value: 2,
        reference: 2,
    },
    3: {
        selected: false,
        value: 3,
        reference: 3,
    },
    4: {
        selected: false,
        value: 4,
        reference: 4,
    },
    5: {
        selected: false,
        value: 5,
        reference: 5,
    },
    6: {
        selected: false,
        value: 6,
        reference: 6,
    },
    7: {
        selected: false,
        value: 7,
        reference: 7,
    },
    8: {
        selected: false,
        value: 8,
        reference: 8,
    },
    9: {
        selected: false,
        value: 9,
        reference: 9,
    },
    10: {
        selected: false,
        value: 10,
        reference: 10,
    },
}



const City = (props) => {
    const [cards, updateCards] = useState(InitialCards);

    const setSelected = (value) => {
        let newCards = {...cards};
        newCards[value].selected = !newCards[value].selected;
        updateCards(newCards);
        console.log(cards.Deal1.selected)
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