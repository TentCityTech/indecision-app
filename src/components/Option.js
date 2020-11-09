import React from 'react';

const Option = (props) => (
    <div>
        {props.optionText}
        <button
            onClick={(e) => { //inline arrow function
                props.handleDeleteOption(props.optionText)
            }}
        >remove</button>
    </div>
);

export default Option;