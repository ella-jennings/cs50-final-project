import React, {useState, useEffect} from 'react';
import City from '../city/city.jsx'
import './cities.scss';
import {InitialCities, CityEnum} from '../../constants';


const Cities = (props: {fiveCities: boolean}) => {
    if(props.fiveCities) {delete InitialCities[CityEnum.PURPLE]};
    const [cities, updateCities] = useState(InitialCities);
    const [overallTotal, updateTotal] = useState(0);

    useEffect(() => {
      calculateTotal();
    });

    const calculateTotal = () => {
      let newTotal = 0;
      Object.keys(cities).map(city => newTotal = newTotal + cities[city]);
      updateTotal(newTotal);
    }
    
    const updateCityTotal = (city: string, newTotal: number) => {
        const updatedCities = {...cities};
        updatedCities[city] = newTotal;
        updateCities(updatedCities);
    }
   
    const childProps = {
      updateCityTotal: (city: string, newTotal: number) => updateCityTotal(city, newTotal),
      updateTotal: (total: number) => updateTotal(total)
    }

    return(
      <div>
        <div className={"cities"}>
          {Object.keys(cities).map(cityColour => <City colour={cityColour} {...childProps}/>)}
        </div>
        <div className="total_score">
          <span className="total_score total_score--value">
            Total Score: {overallTotal}
          </span>
        </div>
      </div>
    )
}

export default Cities;