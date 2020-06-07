import React, {useState} from 'react';
import './App.scss';
import  Settings from './components/settings/settings';
import Cities from './components/cities/cities';
import SettingsButton from './components/settingsButton/settingsButton';

function App() {
  const [fiveCities, isFiveCities] = useState(false);
  const [isModalOpen, openModal] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Lost Cities Calculator</h1>
        <div className="settingsContainer">
          <SettingsButton openModal={() => openModal(!isModalOpen)}/>
        </div>
      </header>
      {isModalOpen ? <Settings fiveCities={fiveCities} changed={() => isFiveCities(!fiveCities)}/> : <Cities fiveCities={fiveCities}/>}
      
      <p>svg obtained from <a href="https://fontawesome.com/license">FontAwesome</a></p>
    </div>
  );
}

export default App;
