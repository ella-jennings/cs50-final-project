import React from 'react';

const ResetButton = ({resetFunction}) => {
    
    return (
        <button className={"reset"} onClick={resetFunction}>
            Reset
        </button>    
    )
}

export default ResetButton;