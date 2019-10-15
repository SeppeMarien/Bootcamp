import React from 'react';
import './App.css';
import TodoContainer from './components/todoContainer';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
    integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossOrigin="anonymous"></link>
      <TodoContainer></TodoContainer>
    </div>
  );
}

export default App;
