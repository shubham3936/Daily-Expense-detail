import React, {useState} from 'react';

import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';
// import Card from '../UI/Card';
const ExpenseItem = (props) => {

    // const[newtitle,setnewtitle]  = useState("");
    const [newTitle,setnewTitle]=useState("");
    const[title,setTitle]  = useState(props.title);
    
    const clickHandler = ()=>{
        setTitle(newTitle);
        // alert("clicked...");
    }

    const changeHandler = (event)=>{
        setnewTitle(event.target.value);
    }


    return (
        <div className="expense-item">
            <ExpenseDate date={new Date(props.date)} />
            <div className="expense-item__description">
                <h2>{ title }</h2>
                <div className="expense-item__price">${ props.amount }</div>
            </div>
            <input type="text" value={newTitle} onChange={changeHandler}/>
            <button onClick={clickHandler}>Change Title</button>
        </div >
    );
}

export default ExpenseItem;