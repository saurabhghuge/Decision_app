import React from 'react';
import ReactDOM from 'react-dom';
const Action =(props) => (
    <button className = "big-button "
     disabled = {props.options.length == 0}
     onClick = {props.chooserandome}> what shoud i do </button>
);

export default Action;