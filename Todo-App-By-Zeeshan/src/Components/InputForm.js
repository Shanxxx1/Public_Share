import React, { Component } from 'react';
import './InputForm.css';
import ListItems from './ListItems';


class InputForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: props.name,
            todo: []
        }
    }

    /// Form Submit
    FormSubmit = (event)=>{
        
        event.preventDefault();
        let InputData = this.state.name
        let todo = this.state.todo
        //console.log(todo)
        todo.push(InputData);
        this.setState({
            name: "",
            todo: todo            
        })
    }
    
    /// Handle Input
    HandleInput = (event)=>{
        //console.log(event.target.value)
        this.setState( {
            name: event.target.value
        } )
    }

    /// Handle remove item
    HandleRemove = (name)=>{
        console.log(name)
        let delItem = name
        let todo = this.state.todo

        const deleteItem = this.state.todo.filter(item => item !== delItem)

        //console.log(filteredItems)
          this.setState( {
           todo:deleteItem
          } )
    }

    render(){
        return(
            <div className="form">
                
                <h2>Welcome to my first app</h2>
                <form id="todo-form" onSubmit={this.FormSubmit}>
                    <input type="text" placeholder="Please add task" onChange={this.HandleInput} required></input>
                    <button>Add</button>
                </form>
                <br />
                <ListItems value={this.state.todo} HandleRemove={this.HandleRemove}></ListItems>
                </div>
        )
    }
}

export default InputForm