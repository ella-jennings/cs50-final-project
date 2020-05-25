import React, {useState} from 'react';
import City from '../city/city.jsx'
import './cities.css';
import {InitialCities, CityEnum} from '../../constants';
import {CalculateScore} from '../helpers/calculator';


const Cities = () => {
    const [cities, setCities] = useState(InitialCities)
    const [total, setTotal] = useState(0);
   
    const updateCardsForCity = (city, cardValue) => {
      let update = {...cities};
      update[city].cards[cardValue].selected = !update[city].cards[cardValue].selected
      setCities(update);
      calculateScore(city);
      calculateTotal();
    }
    
    const calculateScore = (city) => {
      let update = {...cities};

      let array = [];
      const cardsForCity = update[city].cards;
      for (var card in cardsForCity)
      {
          if(cardsForCity[card].selected){
              array.push(cardsForCity[card].value);
          }
      }

      update[city].total = CalculateScore(array);
      setCities(update);
    }

    const calculateTotal = () => {
      let total = 0;
      for (var city in cities)
      {
          total += cities[city].total;
      }
      setTotal(total);
    }

    const customProps = {
      updateCardsForCity: (city ,cardValue) => updateCardsForCity(city, cardValue)
    }
    return(
        <div className={"cities"}>
          <City {...cities[CityEnum.YELLOW]} {...customProps}/>
          <City {...cities[CityEnum.BLUE]} {...customProps}/>
          <City {...cities[CityEnum.WHITE]} {...customProps}/>
          <City {...cities[CityEnum.GREEN]} {...customProps}/>
          <City {...cities[CityEnum.RED]} {...customProps}/>
          <City {...cities[CityEnum.PURPLE]} {...customProps}/>
    <p>Total: {total}</p>
      </div>
    )
}

export default Cities;