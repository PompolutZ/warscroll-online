import * as React from 'react';
import './App.css';
import { Grid, Col, Row } from 'react-bootstrap';

import { ProfileHalo } from './components/profileHalo/index';
import { WeaponProfiles } from './components/weaponProfile/index';
import { UnitCoreStats } from './types';

const wsdata = require('json-loader!./warscrolls/lordcelestant.json');

const coreStats: UnitCoreStats = {
  move: wsdata.move,
  wounds: wsdata.wounds,
  save: wsdata.save,
  bravery: wsdata.bravery
};

const mainGrid = (
  <Grid>
    <Row className="show-grid">
      <Col xs={12}>
        <ProfileHalo stats={coreStats} />
        <WeaponProfiles meleeWeapons={wsdata.meleeWeapons} />  
      </Col>
    </Row>
  </Grid>
);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {mainGrid}
      </div>
    );
  }
}

export default App;
