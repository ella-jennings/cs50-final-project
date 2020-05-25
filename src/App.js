import React from 'react';
import './App.css';
import Cities from './components/cities/cities.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lost Cities Calculator</h1>
      </header>
      <Cities/>
      <p>svg obtained from <a href="https://fontawesome.com/license">FontAwesome</a></p>
    </div>
  );
}

export default App;
