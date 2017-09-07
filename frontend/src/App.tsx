import * as React from 'react';
import './App.css';
import { Table } from 'react-bootstrap';

import { ProfileHalo } from './components/profileHalo/index';
import { WeaponProfileHeader, WeaponProfileRow } from './components/weaponProfile/index';

const wsdata = require('json-loader!./warscrolls/lordcelestant.json');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ProfileHalo stat={wsdata} />
        <Table responsive condensed>
          <WeaponProfileHeader />
          <tbody> 
            {
              wsdata.meleeWeapons.map((weapon: any) => <WeaponProfileRow key={weapon.name} weapon={weapon} />)
            } 
          </tbody>        
        </Table>  
      </div>
    );
  }
}

export default App;
