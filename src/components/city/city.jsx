import React from 'react';
import Card from '../card/card';
import {CardOrder} from '../../constants';
import './city.scss';
import ResetButton from '../resetButton/resetButton';

const City = ({colour, cards, total, resetTotal, selectCard}) => {
    const childProps = {
        setAsSelected: (cardValue) => selectCard(cardValue, colour),
        colour,
    }
    return (
        <div className={`city_${colour} city`}>
            <div className={"cards"}>
            {
                CardOrder.map(card => <Card {...childProps} value={card} selected={cards[card]}/>)
            }
            </div>
            <p className={`total total_${colour}`}>
                <div className={"total_value"}>{total}</div>
                <ResetButton resetFunction={() => resetTotal(colour)}/>
            </p>
        </div>
    )
}

export default City;