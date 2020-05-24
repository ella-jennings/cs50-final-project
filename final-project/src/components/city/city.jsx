import React, {Component} from 'react';
import CheckBox from '../CheckBox/checkbox.jsx'
import './city.css';

const City = (props) => {
    const className = `city_${props.colour}`;
    return (
        <div className={`${className} city`}>
            <CheckBox value={"Deal"}/>
            <CheckBox value={"Deal"}/>
            <CheckBox value={"Deal"}/>
            <CheckBox value={2}/>
            <CheckBox value={3}/>
            <CheckBox value={4}/>
            <CheckBox value={5}/>
            <CheckBox value={6}/>
            <CheckBox value={7}/>
            <CheckBox value={8}/>
            <CheckBox value={9}/>
            <CheckBox value={10}/>
        </div>
    )
}
export default City;