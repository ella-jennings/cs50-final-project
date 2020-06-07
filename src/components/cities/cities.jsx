import React, {useState, useEffect} from 'react';
import {CalculateScore} from '../helpers/calculator.ts';
import City from '../city/city'
import './cities.scss';
import {GetInitialCities, CityEnum} from '../../constants';
import ResetButton from '../resetButton/resetButton';


const Cities = ({fiveCities}) => {
  const InitialCities = GetInitialCities();
  
  if(fiveCities) {delete InitialCities[CityEnum.PURPLE]};
    const [cities, updateCities] = useState(InitialCities);
    const [roundTotal, updateRoundTotal] = useState(0);

    useEffect(() => {
      calculateOverallTotal();
    })

    const selectCard = (cardValue, colour) => {
      const city = cities[colour];
      city.cards[cardValue] = !city.cards[cardValue];
      let selectedCards = [];
      Object.keys(city.cards).map(card => city.cards[card] ? selectedCards.push(card) : null);
      city.total = CalculateScore(selectedCards);
      const newCities = {...cities};
      newCities[colour] = city;
      updateCities(newCities);
    }

    const calculateOverallTotal = () => {
      let newTotal = 0;
      Object.keys(cities).map(city => newTotal += cities[city].total);
      updateRoundTotal(newTotal);
    }

    const resetTotalForCity = (colour) => {
      let newCities = {...cities};
      newCities[colour] = InitialCities[colour];
      updateCities(newCities);
    }

    const resetOverallTotal = () => {
      updateCities({...InitialCities});
      updateRoundTotal(0);
    }

    const childProps = {
      selectCard,
      resetTotal: (colour) => resetTotalForCity(colour)
    }

    return(
      <div>
        <div className={"cities"}>
          {Object.keys(cities).map(
            cityColour =>
            <City 
            colour={cityColour} 
            cards={cities[cityColour].cards} 
            total={cities[cityColour].total}
            {...childProps}/>
          )}
        </div>
        <div className="total_score">
          <div className=" total_score total_score--value">
            Total Score: {roundTotal}
            <ResetButton resetFunction={resetOverallTotal} isWhite={true}/>
          </div>
        </div>
      </div>
    )
}

export default Cities;