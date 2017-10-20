import * as React from 'react';
import { Table, Grid, Row, Col } from 'react-bootstrap';
import { WeaponProfile } from '../../types';
import './index.css';

export const WeaponProfileHeader = () => {
    return (
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
    );
};

interface WeaponProfileRowProps {
    key: string;
    weapon: WeaponProfile;
    style?: string
}

interface WeaponProfilesProps {
    weapons: WeaponProfile[];
}

class WeaponProfileTableRow extends React.Component<WeaponProfileRowProps, {}> {
    render() {
        return (
            <tr>
                <td>{this.props.weapon.name}</td>
                <td>{`${this.props.weapon.range}"`}</td>
                <td>{this.props.weapon.attacks}</td>
                <td>{`${this.props.weapon.toHit}+`}</td>
                <td>{`${this.props.weapon.toWound}+`}</td>
                <td>{this.props.weapon.rend ? this.props.weapon.rend : '-'}</td>
                <td>{this.props.weapon.damage}</td>
            </tr>
        );
    }
}

class WeaponProfileSmallDeviceRow extends React.Component<WeaponProfileRowProps, {}> {
    render() {
        return (
            <div>
                <Row className="show-grid">
                    <Col mdHidden={true} smHidden={true} xs={12} className="title">
                        <span>{this.props.weapon.name}: </span>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col mdHidden={true} smHidden={true} xs={12} className={this.props.style}>
                        <span>{`${this.props.weapon.range}"`} / </span>
                        <span>{this.props.weapon.attacks} / </span>
                        <span>{`${this.props.weapon.toHit}+`} / </span>
                        <span>{`${this.props.weapon.toWound}+`} / </span>
                        <span>{this.props.weapon.rend ? this.props.weapon.rend : '-'} / </span>
                        <span>{this.props.weapon.damage}</span>
                    </Col>
                </Row>
            </div>
        );
    }
}

export class WeaponProfiles extends React.Component<WeaponProfilesProps, {}> {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xsHidden={true} md={12}>
                        <Table responsive={true} condensed={true}>
                            <WeaponProfileHeader />
                            <tbody> 
                            { 
                                this.props.weapons && this.props.weapons
                                    .map((weapon: WeaponProfile) => <WeaponProfileTableRow key={weapon.name} weapon={weapon} />)
                            }
                            </tbody>        
                        </Table>  
                    </Col>
                </Row>
                {
                    this.props.weapons && 
                    this.props.weapons.map(
                        (weapon: WeaponProfile, i: number) => 
                            <WeaponProfileSmallDeviceRow key={weapon.name} 
                                                         weapon={weapon}
                                                         style={(i === this.props.weapons.length - 1) ? 'rawText' : 'rawText bottomBorder'} />)
                }
            </Grid>
        );
    }
}