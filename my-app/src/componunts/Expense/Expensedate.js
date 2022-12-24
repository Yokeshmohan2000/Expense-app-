import './Expensedate.css'
function Expensedate(props){
    
    const month = props.yo.toLocaleString('en-US',{month:"long"})
    const year =props.yo.getFullYear()
    const date=props.yo.toLocaleString('en-US',{day:'2-digit'})
    
     
    return(
        // <div id="bg">
       <div id="box">
          <div id='dates'>
         <h3 id='month'>{month}</h3>
         
         <h3 id='date'>{date}</h3>
         <h3 id='year'> {year}</h3>
         </div>
         </div>
         

    )
}
export default Expensedate;