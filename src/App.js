import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// componente funcional
// funcao pura
const Hello = ({ contador }) => {
  const [viewMode, setViewMode] = useState('WEEKLY')
  const [viewSum, setViewSum] = useState('SUM')

  const mudar = mode => {
    setViewMode(mode)
  }
  return (
    <>
      <h3 onClick={mudar}>Contador: {contador} {viewMode}</h3>
      <button onClick={() => mudar('WEEKLY')}>Semana</button>
      <button onClick={() =>mudar('DAILY')}>Diário</button>
    </>
  )
}

// componente funcional
const App = function() {
  
  /*
  return (
    React.createElement('div', { className: 'main'}, 
      React.createElement('h1', {}, 'Digifarma2')
    )
  )*/
  // JSX
  return (
    <div className='main'>
      <h1>Digifarma</h1>
      <Hello contador={10} />
    </div>
  );
}

export default App;
