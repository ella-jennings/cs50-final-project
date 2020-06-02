import React, {useState, useEffect} from 'react';
import City from '../city/city'
import './cities.scss';
import {InitialCities, CityEnum, createUUID} from '../../constants';
import ResetButton from '../resetButton/resetButton';


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
    
    const [cityItems, resetCities] = useState(Object.keys(cities).map(
      cityColour =>
       <City key={cityColour} colour={cityColour} {...childProps}/>
       ))

    const resetTotal = () => {
        updateTotal(0);
        resetCities((Object.keys(cities).map(cityColour =>
          <City key={createUUID()} colour={cityColour} {...childProps}/>
          )))
    }

    

    return(
      <div>
        <div className={"cities"}>
          {cityItems}
        </div>
        <div className="total_score">
          <div className=" total_score total_score--value">
            {/* Total Score: {overallTotal}
            <ResetButton resetFunction={resetTotal} isWhite={true}/> */}
          </div>
        </div>
      </div>
    )
}

export default Cities;