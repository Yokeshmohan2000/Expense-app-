// import { useState } from "react";
import './ExpenseFilter.css';

function Expensefilter(props){

  
    function fil(event){
        props.newyear(event.target.value);
    }

    return(
        <div>
            <div className='ma'>
            <h3 id='text'>Filter By year</h3>
            
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