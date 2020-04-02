import React from 'react';

const counter = ({number, onIncrease, onDecrease}) => {
    return (
        <div>
            <b>{number}</b>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    );
};

export default counter;