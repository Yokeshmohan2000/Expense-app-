import Expensedate from './Expensedate';
import './Expenseitem.css'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';



function Expenseitem (props){
    return(
         <div >
      <div id="container">

    <div >  
        <div>
          <Expensedate yo={props.obj1.date}></Expensedate> 
        </div>
    </div> 

        <div id='loan'>
           <h3>{props.obj1.loan}</h3>
        </div>

        <div id='rs'>
          <h2>{props.obj1.rs}</h2>
        </div>
        
        <div id='icon'>
        <IconButton sx={{color:"black"}} aria-label="delete" onClick={()=>props.del(props.obj1.id)}>
        <DeleteIcon />
      </IconButton>
          {/* <button onClick={()=>props.del(props.obj1.id)}>Delete</button> */}
        </div>
      
      </div>
        <br></br>
        
         </div>


    )
}

export default  Expenseitem;