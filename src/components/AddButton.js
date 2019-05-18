import React from 'react';
const style = {
    borderRadius: '100%',
    width: '50px',
    height: '50px',
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    outline: '0px',
    border: '0px',
    fontSize: "15px",
    fontWeight: 'bold',
    cursor: 'pointer'
}
const AddButton = ({ handleClick }) => (
    <button style={style} onClick={handleClick}>+</button>
)

export default AddButton;