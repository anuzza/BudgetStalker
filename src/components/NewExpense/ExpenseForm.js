import react, {useState} from "react";

import './ExpenseForm.css';


const ExpenseForm = ()=>{

const [enteredTitle, setEnteredTitle] = useState('');
const [enteredAmount, setEneteredAmount] = useState('');
const[enteredDate, setEnteredDate] = useState('');
  
// const [userInput, setUserInput]=useState({
//     enteredTitle: '',
//     enteredAmount: '',
//     enteredDate : ''
// });

    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        
        // });

        // setUserInput((prevState)=>{
        //     return {...prevState, enteredTitle: event.target.value};


        // });

    };

    const amountChangeHandler = (event) =>{
        setEneteredAmount(event.target.value);

    }

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);

    }

    const submitHandler = (event)=>{
        event.preventDefault();
    
        const expenseData = {
            title: enteredTitle,
            amount : enteredAmount,
            date: new Date(enteredDate),
        };
            console.log(expenseData);
            setEnteredTitle('');
            setEneteredAmount('');
            setEnteredDate('');


    };


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense_controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value = {enteredTitle}
                    onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type = 'number' 
                    value = {enteredAmount} min = "0.01" step = "0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value = {enteredDate}
                    min = "2022-01-01" max = "2022-12-31" onChange={dateChangeHandler}/>
                </div>
                <div className="new-expense__actions">
                    <button type = "submit">Add Expense</button>

                </div>

            </div>
        </form>

    );

}

export default ExpenseForm;