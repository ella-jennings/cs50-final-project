import React from 'react';

const CheckBox = (props) => {

    return(
        <div>
            <input type="checkbox" value={props.value}></input>
            <span>{props.value}</span>
        </div>
    )
}

export default CheckBox;