import react, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props)=>{

    const[isEditing, setIsEditing]= useState(false);
    
   const startEditingHandler = () => {
       setIsEditing(true);
   };

   const stopEditingHandler = ()=>{
       setIsEditing(false);
   }

    const onSaveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData, id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);


    };
    return <div className = "new-expense">
        
         {!isEditing && <button onClick={startEditingHandler} type = 'submit' > Add new Expense</button>}

         {isEditing && <ExpenseForm onSaveExpenseData ={onSaveExpenseDataHandler} stopEditing = {stopEditingHandler}/>
        }
        
        
        
    </div>
};

export default NewExpense;