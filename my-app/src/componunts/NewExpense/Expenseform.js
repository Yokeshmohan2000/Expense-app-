
import './Expenseform.css'
import {useState} from 'react'
function Expenseform(props){

  const [name,setname]=useState("")
  const [amount,setamount]=useState("")
  const [date,setdate]=useState("")

    
      function changename(event){
        setname(event.target.value)
        
       }
       function changeamount(event){
         setamount(event.target.value)
        
       }
       function changedate(event){
        setdate(event.target.value)
       }

        const click=(e)=>{
          e.preventDefault()
          setname('')
          setamount('')
          setdate("")
           
         let formvalues ={id:Math.floor(Math.random()*100), loan:name,rs:'Rs .'+amount,date:new Date(date)}
        props.formdata(formvalues)
        //  console.log(form)

        props.start()
        }

        return(
          <div id='fm'>
             <div id='form'>
            <form >
         
              <div>
                <label htmlFor="title">Title</label>
                <input type='name' id="title" onChange={changename} value={name}></input><br></br>
              </div><br></br>

              <div >
                <label htmlFor="amount">Amount</label>
                <input type='number' id="amount" onChange={changeamount} value={amount}></input><br></br>
              </div><br></br>
      
              <div>
                <label htmlFor="date" >Date</label><br></br>
                <input type='date' id="date" onChange={changedate} value={date}></input><br></br>
              </div>
              
              <div id='frmbutton'>
             <button id='cancelbuttton'onClick={props.cancel}>Cancel</button>
             <button id='addbutton' onClick={click}>Add </button>
             </div>
        
            </form>
        

      </div>
      </div>
      
    )
}
export default Expenseform;