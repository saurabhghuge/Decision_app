import React from 'react';
import ReactDOM from 'react-dom';
import Option from './Option'
const Options = (props) =>  (
        <div >
          <div className = "widget-header">
          <h3 className = "widget-header__title">Your Options</h3>       
          
          {/* {
          props.options.map((op) =><p key = {op}> element : {op}</p>)
          } */}
         
            
          <button className="button button--link" 
          onClick = {props.handelremoveall}>remove all </button>
          </div> 
          {props.options.length == 0 && <p className = "widget__message">please add an option to get started</p>}
          
          {props.options.map((op,index) => (
                <Option 
                    key = {op}
                    optionText = {op}
                    count={index + 1}
                    removeoption = {props.removeoption}
          
                />))}
      </div>
  )

export default Options;