import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
    /* prop */    isOpen={!!props.selectedOption} // true booleans 
    /* prop */    onRequestClose={props.handleClearSelectedOption}
    /* prop */    contentLabel="Selected Option"
    >
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
    );

export default OptionModal;