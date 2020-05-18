import React, { Component } from 'react';
import './InputForm.css';
import ListItems from './ListItems';


class InputForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            text:{
            name: "",
            update: ""
            },
            todo: []
        }
    }

    /// Form Submit
    FormSubmit = (event)=>{
        
        event.preventDefault();
        let InputData = this.state.text
        let todo = this.state.todo
        //console.log(todo)
        todo.push(InputData);
        this.setState({
            text:{
                name: "",
                update: ""
                 },
            todo: todo            
        })
    }
    
    /// Handle Input
    HandleInput = (event)=>{
        //console.log(event.target.value)
        this.setState( {
            text:{
            name: event.target.value,
            update: Date.now()
        }
        } )
    }

    /// Handle remove item
    HandleRemove = (update)=>{
        console.log(update)
        
        //let delItem = name
        let delItem = update
        //let todo = this.state.todo
        let todo = this.state.todo
        console.log(todo)

        const deleteItem = this.state.todo.filter(item => item.update !== delItem)

        console.log(deleteItem,"abc")
          this.setState( {
           todo:deleteItem
          } )
    }


    /// Edit Input
    EditInput = (text, update)=>{
        //console.log(text, update)
        let todo = this.state.todo
        console.log(todo)

       todo.map(sarimitem =>{
            if(sarimitem.update===update){
                sarimitem.name=text;
            }
        })
        this.setState({
            todo:todo
        })

        

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
                <ListItems value={this.state.todo} HandleRemove={this.HandleRemove} EditInput={this.EditInput}></ListItems>
                </div>
        )
    }
}

export default InputForm