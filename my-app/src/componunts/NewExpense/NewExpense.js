// import Expenseform from "./Expenseform";

import Expenseform from "./Expenseform";
import { useState } from "react";
import './NewExpense.css' 

function NewExpense(props){

const [isEdit,newEdit]=useState(false);

function frm1(form1){
    props.app(form1)
    }

const start=()=>{ 
 newEdit(true)
    }
const cancel=()=>{
    newEdit(false)
    }

    return(
        <div>
            <div>
                <h1>Expense App</h1>
            </div>

     {isEdit===true? (<Expenseform formdata={frm1} cancel={cancel} ></Expenseform>) : 
     ( <button onClick={start} id='bttn'>view Form</button>)}
    
        </div>
        

    )
}
export default NewExpense;