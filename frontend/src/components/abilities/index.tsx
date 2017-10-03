import * as React from 'react';
import { Panel, Label } from 'react-bootstrap';

import { Ability, TurnPhase, AbilityType } from '../../types'; 
import './index.css';

interface AbilitiesPanelProps {
    abilities: Ability[];
}

interface AbilityRowProps {
    key: number;
    ability: Ability;
    style: string;
}

interface PhaseLabelProps {
    key: number;
    phase: TurnPhase;
}

class PhaseLabel extends React.Component<PhaseLabelProps, {}> {
    render() {
        return(
            <Label bsStyle="success">{TurnPhase[this.props.phase].toUpperCase()}</Label>
        );
    }
}

class AbilityRow extends React.Component<AbilityRowProps, {}> {
    render() {
        return (
            <div className={this.props.style}>
                <h4 className="header">
                    {
                        this.props.ability.name.toUpperCase() 
                    }
                    {
                        this.props.ability.type === AbilityType.Command &&
                        <Label bsStyle="warning">{AbilityType[this.props.ability.type]}</Label>
                    }
                </h4>
                <p>{this.props.ability.desc}</p>
                <p>
                    <b>Activates in:</b> <Label bsStyle="info">
                        {TurnPhase[this.props.ability.abilityActivationPhase].toUpperCase()}</Label>
                </p>
                <p>
                    <b>Affects phasess:</b> {
                        this.props.ability.affectPhases.map((p, i) => <PhaseLabel key={i} phase={p}/>)}
                </p>
            </div>
        );
    }
}

export class AbilitiesPanel extends React.Component<AbilitiesPanelProps, {}> {
    render() {
        return (
            <Panel header={'Abilities'} bsStyle="info">
                {this.props.abilities && this.props.abilities.map((a, i) => 
                    <AbilityRow 
                        key={i} 
                        ability={a}
                        style={(i === this.props.abilities.length - 1) ? 'lastItem' : 'item'} 
                    />)}
            </Panel>
        );
    }
}