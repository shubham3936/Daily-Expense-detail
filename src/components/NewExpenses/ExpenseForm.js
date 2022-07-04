import React, {useState} from 'react'
import './ExpenseForm.css';


const ExpenseForm = ()=> {

    const[EnteredTitle,setEnteredTitle] = useState('');
    const[EnteredAmount,setEnteredAmount] = useState('');
    const[EnteredDate,setEnteredDate] = useState('');
    
    const titleChangeHandler = (event)=>{  setEnteredTitle(event.target.value);  }
    const amountChangeHandler = (event)=>{setEnteredAmount(event.target.value);    }
    const dateChangeHandler = (event)=>{ setEnteredDate(event.target.value);   }
    const onSubmitHandler = (event)=>{
        event.preventDefault();
        const expenseData = {
            title:EnteredTitle,
            amount:EnteredAmount,
            data: new Date(EnteredDate)
        }
         console.log(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        
    }
  return (
    <form onSubmit={onSubmitHandler}>
        <div className="new-expense_controls">
            <div className="new-expense_control">
                <label>Title</label>
                <input type="text" value={EnteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense_control">
                <label>Amount</label>
                <input type="number" value={EnteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense_control">
                <label>Date</label>
                <input type="date" value={EnteredDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense_actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm;