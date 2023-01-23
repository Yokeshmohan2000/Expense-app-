import Expenseitem from "./Expenseitem";
import  "./Expense.css"
import Expensefilter from "./Expensefilter";
import { useState } from "react";

function Expense(props){

    const [year,setyear]=useState('select year')
    
    function flt (event){
      setyear(event)
    }
    
    const filteryear =props.obj.filter((ob)=>{
      return ob.date.getFullYear().toString() === year;
    })

         return(
        <div>
        
            
               <div> 
                   <Expensefilter year={year} newyear={flt}></Expensefilter>
               </div>

               {year==='select year'?(props.obj.map((op,index)=>
                <Expenseitem key={index} obj1={op} del={props.rmv}></Expenseitem>) )
                
                    : (filteryear.length===0?(<h4 id="nodata">No Data Found</h4>)
                    :(filteryear.map((o)=>(
                <Expenseitem obj1={o} ></Expenseitem>
               ))))} 
               
        
</div>
        
    
        
        

    )
    
}
export default Expense;