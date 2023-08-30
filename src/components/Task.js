 function Task(){
  function getNotification(){
        alert('Sriraju');
    }
    return(
        <div>
            <button type="button" onClick={getNotification}>Click Me</button>
        </div>
    )
    
}
export default Task;