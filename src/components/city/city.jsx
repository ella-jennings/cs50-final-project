import React from 'react';
import Card from '../card/card.jsx'
import './city.css';

const City = (props) => {
    const className = `city_${props.colour}`;
    let cards = props.cards;

    const genericProps = {
        setAsSelected: (cardValue) => props.updateCardsForCity(props.colour, cardValue),
        colour: props.colour,
    }

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
            <p>Total: {props.total}</p>
        </div>
    )
}

export default City;