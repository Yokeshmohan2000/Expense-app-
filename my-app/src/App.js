import { useState } from "react";
import Expense from "./componunts/Expense/Expense";
// import Expenseform from "./componunts/NewExpense/Expenseform";
import NewExpense from "./componunts/NewExpense/NewExpense";



function App() {

     // function swe(e){
     //      console.log(e)
     // }

     let ary = [
          {id:Math.floor(Math.random()*100), date: new Date(2023,2,21), loan: "Bank Loan", rs: "Rs.2000" },
          { id:Math.floor(Math.random()*100),date: new Date(2021,3,17), loan: "Bank Loan", rs: "Rs.5000" },
          { id:Math.floor(Math.random()*100),date: new Date(2022,7,9), loan: "Bank Loan", rs: "Rs.3000" }
     ];
     const [expense,setExpense]=useState(ary);

     
     function expenseHandler(data){
          setExpense((ar)=>{
               return [data, ...ar]
          })
     }
const del=(id)=>{
          setExpense((arr)=>{ return arr.filter((ar)=>ar.id !==id )})
          }

     return (
          <div>
               <center >    
               <div>
                 <NewExpense app={expenseHandler}></NewExpense>
               </div>

              <div>
                 <Expense obj={expense} rmv={del}> </Expense><br></br>
          </div>

              <div>
                {/* <Expense remove={del}></Expense> */}
              </div>
              </center>

          </div>
           );

}
export default App;