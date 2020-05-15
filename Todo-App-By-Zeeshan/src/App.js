import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import InputForm from './Components/InputForm'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <InputForm name="Add Task"></InputForm>
      
      

    </div>
  );
}

export default App;
