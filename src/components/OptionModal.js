import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) =>(
    <Modal isOpen = {!!props.selectedOption} 
    contentLabel = 'Selected Option'
    closeTimeoutMS ={200}
    className ='modal'
    onRequestClose = {props.handelselected}
    >
       <div className ="modal__title"><p>Selected Option :</p></div>
       {props.selectedOption && <p className = 'modal__body'>{props.selectedOption}</p>}
       <button className = "button" 
        onClick = {props.handelselected}> Okay</button>

    </Modal>
); 
export default OptionModal;