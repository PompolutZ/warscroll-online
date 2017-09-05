import * as React from 'react';
import './App.css';

// const logo = require('./logo.svg');
// const profileHalo = require('./imgs/profilehalo.png');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <div className="App-header">
          <img src={profileHalo} className="App-logo" alt="logo" />
          <h2>Welcome to React!!!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div className="profile-container">
          <img src={profileHalo} className="profile-halo" alt="logo" />
        </div> */}
        <div className="parent">
          <div className="child">
            <div className="stat move-stat">
              <p>5"</p>    
            </div>  
            <div className="stat wound-stat">
              <p>2</p>    
            </div>  
            <div className="stat bravery-stat">
              <p>6</p>    
            </div>  
            <div className="stat save-stat">
              <p>4+</p>    
            </div>  
          </div>
        </div>
      </div>
    );
  }
}

export default App;
