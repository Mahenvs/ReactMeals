function ExpenseDate(props){

    const month = props.dateE.toLocaleString('en-US',{month:'long'})
    const year = props.dateE.getFullYear()
    const day = props.dateE.toLocaleString('en-US',{day:'2-digit'})
    return (
    <div>
    <div>{month} </div>     
    <div>{year } </div>   
    <div>{day} </div>    
    </div> 
    )
}

export default ExpenseDate;