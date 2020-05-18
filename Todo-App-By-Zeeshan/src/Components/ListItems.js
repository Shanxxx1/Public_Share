import React from 'react';
import './ListItems.css';


const ListItems = (props)=>{
    const abc = props.value;
    const listItemsObject = abc.map((xyzparameter) =>
        {
            return <div className="ItemDiv" key={xyzparameter.update}>
                <p>
                    <input type="text" className="editinput" value ={xyzparameter.name} onChange={ (event)=>props.EditInput(event.target.value, xyzparameter.update)}></input>
                    
                    <button onClick={ ()=>props.HandleRemove(xyzparameter.update)}>Remove</button>
                
                </p>
                
            </div>
        })
 
    return(
        <div>
            {listItemsObject}
          
            
        </div>
    )
}
export default ListItems