import React from 'react';
import './App.scss';
import Cities from './components/cities/cities';
import SettingsButton from './components/settingsButton/settingsButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Lost Cities Calculator</h1>
        <div className="settingsContainer">
          <SettingsButton openModal={() => console.log("clicked")}/>
        </div>
      </header>
      <Cities fiveCities={false}/>
      <p>svg obtained from <a href="https://fontawesome.com/license">FontAwesome</a></p>
    </div>
  );
}

export default App;
