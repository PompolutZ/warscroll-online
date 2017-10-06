import * as React from 'react';
import './App.css';
import { Grid, Col, Row } from 'react-bootstrap';

import { ProfileHalo } from './components/profileHalo/index';
import { WeaponProfiles } from './components/weaponProfile/index';
import { AbilitiesPanel } from './components/abilities/index';
import { UnitCoreStats } from './types';
import * as _ from 'underscore';

import { Link, Switch, Route } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1><Link to='/'>Home</Link></h1>
    </header>  
  );
}

const WarscrollLink = (props: any) => {
  return (
    <h4>
      <Link to={`/warscroll/${props.name}`}>
        {props.name}
      </Link>
    </h4>
  );
}

class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      warscrolls: []
    }
  }

  async componentDidMount() {
    const res = await fetch(`/db`);
    const data = await res.json();
    this.setState({
      warscrolls: _.keys(data).filter((el: string) => !el.startsWith('_'))
    });
  }

  render() {
    const links: any = 
      this.state.warscrolls.map((el: string, i:number) => {
        return <WarscrollLink name={el} key={i} /> 
      });

    return (
      <div>{links}</div>
    );
  }
}

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/warscroll/:name' component={Warscroll}></Route>
      </Switch>  
    </main>  
  );
}

class Warscroll extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      wsdata: {}
    };
  }

  async componentDidMount() {
    const res = await fetch(`/ws/${this.props.match.params.name}`);
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
            <Link to="/">Back</Link>
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

class App extends React.Component<{}, any> {
  render() {
    return (
      <div>
        <Header /> 
        <Main /> 
      </div>
    );
  }
}

export default App;
