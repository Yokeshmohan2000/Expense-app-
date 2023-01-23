// import { useState } from "react";
import './ExpenseFilter.css';

function Expensefilter(props){

  
    function fil(event){
        props.newyear(event.target.value);
    }

    return(
        <div className='filter_year'>
            <div className='div-filter' >
            <h1 >Filter year</h1>         
             </div>

        <div id='name'>   
        <select  value={props.year} onChange={fil}>
            <option>select year</option>
            <option value='2020'>2020</option>
            <option  value='2021'>2021</option>
            <option  value='2022'>2022</option>
            <option value='2023'>2023</option>
        </select>
        </div> 
        </div>
    )
}
export default Expensefilter;