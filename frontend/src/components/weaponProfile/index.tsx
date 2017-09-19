import * as React from 'react';
import { Table } from 'react-bootstrap';
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
}

interface WeaponProfilesProps {
    meleeWeapons: WeaponProfile[];
}

class WeaponProfileRow extends React.Component<WeaponProfileRowProps, {}> {
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

export class WeaponProfiles extends React.Component<WeaponProfilesProps, {}> {
    render() {
        return (
            <Table responsive={true} condensed={true}>
                <WeaponProfileHeader />
                <tbody> 
                { 
                    this.props.meleeWeapons
                         .map((weapon: WeaponProfile) => <WeaponProfileRow key={weapon.name} weapon={weapon} />)
                }
                </tbody>        
          </Table>  
        );
    }
}