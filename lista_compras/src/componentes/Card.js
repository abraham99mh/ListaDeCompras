import React, { useState } from 'react'
import InputList from './InputList';
import List from './List'

const Card = (props) => {

    const [elements, onElements] = useState([]);

    return (
        <div className='card text-bg-dark p-4'>
            <InputList elements={elements} onElements={onElements} setToast={props.setToast} />
            <List elements={elements} />
        </div>
    );
}

export default Card;