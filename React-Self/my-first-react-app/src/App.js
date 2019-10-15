import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './Components/HelloWorld'
import EmployeeContainer from './Components/EmployeeContainer';

function App() {
  return (
    <div className="App">
      {/* 
        Call component without value 
        <HelloWorld />
      */}
      
      {/* 
        Call component with value, comes in props in the component 
        <HelloWorld name="euricom" />
      */}

      {/* 
        Call component with value V2   
        <HelloWorld>Euricom</HelloWorld>
      */}

      {/*
        Call EmployeeContainer witch calls EmployeeList and passes his state value*/
      
        <EmployeeContainer></EmployeeContainer>
      }

    </div>
  );
}

export default App;
