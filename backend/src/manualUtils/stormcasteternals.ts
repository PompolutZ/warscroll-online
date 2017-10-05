import {
    Warscroll,
    WeaponType,
    TurnPhase,
    AbilityType
} from './types';

export const dbPath = '/order/stormcasteternals';

export const lordCelestant: Warscroll = {
    title: 'Lord-Celestant',
    matchPoints: 100,
    renownPoints: 20,
    wounds: 5,
    move: 5,
    save: 3,
    bravery: 9,
    weaponProfiles: [
        {
            name: 'Sigmarite Runeblade',
            type: WeaponType.Melee,
            range: 1,
            attacks: 4,
            toHit: 3,
            toWound: 3,
            rend: -1,
            damage: 1
        },
        {
            name: 'Warhammer',
            type: WeaponType.Melee,
            range: 1,
            attacks: 2,
            toHit: 4,
            toWound: 3,
            rend: null,
            damage: 1
        },
    ],
    carries: [
        [`Sigmarite Runeblade`,`Warhammer`]
    ],
    abilities: [
        {
            name: 'Inescapable Vengeance',
            desc: `If this model has made a charge move this turn, 
            it can make 1 extra attack with each of its melee weapons`,
            abilityActivationPhase: TurnPhase.Charge,
            affectPhases: [TurnPhase.Combat],
            type: AbilityType.None
        },
        {
            name: 'Sigmarite Warcloak',
            desc: `In the shooting phase you can unleash D6 warhammers from this model's warcloak.
            Pick an enemy unit within 16" of this model for each hammer that is unleashed, 
            then roll a dice for each unit you picked. On roll of 4 or more the unit suffers a mortal wound.
            Note that you can pick the same unit more than once in a phase.`,
            abilityActivationPhase: TurnPhase.Shooting,
            affectPhases: [TurnPhase.Shooting],
            type: AbilityType.None
        },
        {
            name: 'Furious Retribution',
            desc: `If this model is your general and uses this ability, then until next hero phase
            you can add 1 to the result of any hit rolls in the combat phase for this model and 
            friendly STORMCAST ETERNAL units within 9" of him.`,
            abilityActivationPhase: TurnPhase.Hero,
            affectPhases: [TurnPhase.Combat],
            type: AbilityType.Command
        }
    ]
};
