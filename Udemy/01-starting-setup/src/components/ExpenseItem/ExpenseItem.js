import React, { useState } from 'react';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css'

function ExpenseComponent (props) {

    const [title, setTitle] = useState(props.title);    

    function clickHandler() {        
        setTitle ("Updated");
    }
    
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item_description">
                <h2>{title}</h2>
                <div className="expense-item_price">{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </div>
    );
}

export default ExpenseComponent;