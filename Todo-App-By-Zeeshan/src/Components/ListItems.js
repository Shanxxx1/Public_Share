import React from 'react';
import './ListItems.css';

const ListItems = (props)=>{
   
    
    return(
        <div>
            {props.value.map( (name, index) =>{
                return(
                    <div className="ItemDiv" key={index}>
                        <p>{name}
                   
                    <button onClick={ ()=>props.HandleRemove(name)}>Remove</button>
                    </p>
                    </div>
                
                )
            })}
        </div>
    )
}

export default ListItems