import React from 'react';
import ReactDOM from 'react-dom';
export default class Addoption extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.onFormSubmit = this.onFormSubmit.bind(this);
    //     this.state = {
    //         error : undefined
    //     };
    // }
    state = {
        error : undefined
    };
    onFormSubmit = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.onFormSubmit(option);

        this.setState(() => ({ error}));
        if (!error){
            e.target.elements.option.value = '';
        }
    };
    render(){   
        return(
            <div >       
                {this.state.error && <p>{this.state.error}</p>}
                <form className="add-option"  onSubmit = {this.onFormSubmit}>
                    <input className="add-option__input" type = "text" name = "option"/>
                    <button className="button"> add option</button>
                </form>
            </div>
        )
    }
}
