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
           <div className="tittle">
    <center>            
            <div className="heading">
                <h1 id='head'><span>E</span>xpense<span>A</span>pp</h1>
            </div>
        <div className="viewbotton">
            {isEdit===true? (<Expenseform formdata={frm1} cancel={cancel} ></Expenseform>) : 
            (<button onClick={start} className='bttn'>View Form</button>)}
        </div>
    </center>

        </div>
        

    )
}
export default NewExpense;