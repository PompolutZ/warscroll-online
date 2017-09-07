import * as React from 'react';
import { Table } from 'react-bootstrap';

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
}

export const WeaponProfileRow = (props: any) => {
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

