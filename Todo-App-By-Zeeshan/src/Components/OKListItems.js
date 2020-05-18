import React from 'react';
import './ListItems.css';

// const ListItems = (props)=>{
//    //console.log(props)
//     const abc = props.value;
//     const [name] = abc
//     console.log(name,"Shani")

    
   
//     return(
//         <div>
           
//         </div>
//     )
// }





function ListItems(props){
    const items = props.value;
    //console.log(items)
    // Create map function it is like loop it's called Array.prototype.map()
    const listItems = items.map(item =>
        {
            return <div className="list" key={item.key}>
                <p>
                    {item.name}
                <input type="text" id={item.key} value ={item.name} 
                onChange =
                {(event) =>{props.setUpdate(event.target.value, item.key)}} />
                <span>
                    {/* <FontAwesomeIcon className="faicons" icon="trash" onClick={ ()=> props.deleteItem(item.key)} /> */}
                </span>
                </p>
                
            </div>
        })
 
    return(
        <div>
            {listItems}
          
            
        </div>
    )
}
export default ListItems