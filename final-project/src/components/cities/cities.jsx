import React from 'react';
import City from '../city/city.jsx'
import {CityEnum} from '../../constants';
import './cities.css';

const Cities = () => {
    return(
        <div className={"cities"}>
        <City colour={CityEnum.YELLOW}/>
        <City colour={CityEnum.BLUE}/>
        <City colour={CityEnum.WHITE}/>
        <City colour={CityEnum.GREEN}/>
        <City colour={CityEnum.RED}/>
        <City colour={CityEnum.PURPLE}/>
      </div>
    )
}

export default Cities;