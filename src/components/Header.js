import React from 'react';
import ReactDOM from 'react-dom';


const Header =(props) => (
        <div className = "header">
            <div>
            <h1 className = "header__title">{props.title}</h1>
            <h2 className= "header__subtitle">{props.subtitle}</h2>
        </div></div>
    );


export default Header;