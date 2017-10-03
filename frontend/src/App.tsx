import * as React from 'react';
import './App.css';
import { Grid, Col, Row } from 'react-bootstrap';

import { ProfileHalo } from './components/profileHalo/index';
import { WeaponProfiles } from './components/weaponProfile/index';
import { AbilitiesPanel } from './components/abilities/index';
import { UnitCoreStats } from './types';



class App extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      wsdata: {}
    };
  }

  async componentDidMount() {
    const res = await fetch(`/ws/tzaangorenlightened`);
    const data = await res.json();
    this.setState({wsdata: data}); 
  }

  render() {
    const coreStats: UnitCoreStats = {
      move: this.state.wsdata.move,
      wounds: this.state.wsdata.wounds,
      save: this.state.wsdata.save,
      bravery: this.state.wsdata.bravery
    };
    
    const mainGrid = (
      <Grid>
        <Row className="show-grid">
          <Col xs={12}>
            <ProfileHalo stats={coreStats} />
            <WeaponProfiles meleeWeapons={this.state.wsdata.meleeWeapons} />
            <AbilitiesPanel abilities={this.state.wsdata.abilities} />  
          </Col>
        </Row>
      </Grid>
    );

    return (
      <div className="App">
        {mainGrid}
      </div>
    );
  }
}

export default App;
