import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Options from './Options';
import Option from './Option';
import Action from './Action';
import Addoption from './Addoption';
import OptionModal from "./OptionModal";
class Universal extends React.Component{ 
    // constructor(props){
    //     super(props);
    //     this.handelremoveall = this.handelremoveall.bind(this);
    //     this.chooserandome = this.chooserandome.bind(this);
    //     this.onFormSubmit = this.onFormSubmit.bind(this);
    //     this.removeoption = this.removeoption.bind(this);
    state = {
            options : [],
            selectedOption : undefined
        }   ;
    

    componentDidMount = () =>{
        try{
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            
            if (options){
                this.setState(()=> ({options}));
            }
        } catch (e) {
            // Do nothing at all if there is any error
        }
    }
    componentDidUpdate = (prevProps, prevState) =>{
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    } 

    handelselected = () => {
        this.setState (()=> ({selectedOption : undefined}));
    }

    handelremoveall = () =>{
        this.setState (() => ({ options : [ ]}));
        // {
        //     return {
        //         options : []
        //     };
        // });
    }
    chooserandome = () =>{
        // this.setState(()=>
        // {
        //     return {
                const num = Math.floor(Math.random() * this.state.options.length);
                const msg = this.state.options[num];
//                 alert(msg + num);
                this.setState((props) => ({selectedOption : num + ": "+ msg }));
        //     };
        // });
    }
    onFormSubmit = (option)=>{
        if (!option){
            return "enter valid value to add item";
        } else if (this.state.options.indexOf(option) > -1){
            return "this option already exists";

        }
        this.setState((prevState) => ({options : prevState.options.concat(option)}));
        
    }
    removeoption = (optiontoremove )=>{
        this.setState((prevState)=> ({
        options : prevState.options.filter((option) => optiontoremove !== option)
        }));
    }
    render = ()=>{
        const title = " this is Indecision App";
        const subtitle = " Based on React";
        //const options = ["sda","dsa",];
        return(
            <div className = "container">
                <Header title = {title} subtitle = {subtitle}/>
                <Action options = {this.state.options }
                chooserandome = {this.chooserandome}/>
                <div className = "widget">
                <h3><Options options = {this.state.options } 
                    handelremoveall = {this.handelremoveall}
                    removeoption = {this.removeoption}/>
                </h3>
                <Addoption onFormSubmit = {this.onFormSubmit}/>
                </div>
                <OptionModal 
                handelselected = {this.handelselected}
                selectedOption = {this.state.selectedOption} />
            </div>        
        );
    }
}
// Universal.defaultProps = {
//     options : []
// };
export default Universal;