import * as React from 'react';
import './App.css';
import { Table } from 'react-bootstrap';

const wsdata = require('json-loader!./warscrolls/lordcelestant.json');

function WeaponToRow(props: any) {
  console.log(props.weapon);
  return (
    <tr>
    <td>{props.weapon.name}</td>
    <td>{`${props.weapon.range}"`}</td>
    <td>{props.weapon.attacks}</td>
    <td>{`${props.weapon.toHit}+`}</td>
    <td>{`${props.weapon.toWound}+`}</td>
    <td>{props.weapon.rend ? props.weapon.rend : '-'}</td>
    <td>{props.weapon.damage}</td>
  </tr>
  );
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="parent">
          <div className="child">
            <div className="stat move-stat">
              <p>{`${wsdata.move}"`}</p>    
            </div>  
            <div className="stat wound-stat">
              <p>{wsdata.wounds}</p>    
            </div>  
            <div className="stat bravery-stat">
              <p>{wsdata.bravery}</p>    
            </div>  
            <div className="stat save-stat">
              <p>{`${wsdata.save}+`}</p>    
            </div>  
          </div>
        </div>

        <Table responsive condensed>
          <thead>
            <tr>
              <th>MELEE WEAPON</th>
              <th>Range</th>
              <th>Attacks</th>
              <th>To Hit</th>
              <th>To Wound</th>
              <th>Rend</th>
              <th>Damage</th>
            </tr>
          </thead>
          <tbody> 
            {
              wsdata.meleeWeapons.map((weapon: any) => <WeaponToRow key={weapon.name} weapon={weapon} />)
            } 
          </tbody>        
        </Table>  
      </div>
    );
  }
}

export default App;
