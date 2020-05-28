import React, {useState, useEffect} from 'react';
import Card from '../card/card.jsx';
import {InitialCards, CardOrder} from '../../constants';
import {CalculateScore} from '../helpers/calculator';
import './city.scss';

const City = ({colour, updateCityTotal}) => {
    const [newTotal, setTotal] = useState(0);
    const [cards, setCards] = useState(InitialCards);
    
    useEffect(() => {
        updateTotal();
    // adding colour/function like it suggests actually cause an infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [cards])

    const updateTotal = () => {
        const selectedCards = [];
        CardOrder.map(card => cards[card] && selectedCards.push(card))
        const newTotal = CalculateScore(selectedCards);
        setTotal(newTotal);
        updateCityTotal(colour, newTotal);
    }
    
    const updateCards = (value) => {
        const updatedCards = {...cards};
        updatedCards[value] = !updatedCards[value];
        setCards(updatedCards);
    }

    const genericProps = {
        setAsSelected: (cardValue) => updateCards(cardValue),
        colour: colour,
    }

    return (
        <div className={`city_${colour} city`}>
            <div className={"cards"}>
            {
                CardOrder.map(card => <Card {...genericProps} value={card} selected={cards[card]}/>)
            }
            </div>
            <p className={`total total_${colour}`}>{newTotal}</p>
        </div>
    )
}

export default City;