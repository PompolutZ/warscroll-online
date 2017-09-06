const fs = require('fs');

const writeFileAsync = (path: string, text: string) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, text, (err: any) => {
            if(err) reject(err);
            else resolve();
        })
    });
}

enum TurnPhase {
    Hero,
    Move,
    Shooting,
    Charge,
    Combat,
    Battleshock,
    Any
}

enum AbilityType {
    None,
    Command
}

const lordCelestant = {
    title: 'Lord-Celestant',
    matchPoints: 100,
    renownPoints: 20,
    wounds: 5,
    move: 5,
    save: 3,
    bravery: 9,
    meleeWeapons: [
        {
            name: 'Sword',
            range: 1,
            attacks: 4,
            toHit: 3,
            toWound: 3,
            Rend: -1,
            damage: 1
        },
        {
            name: 'Relic hammer',
            range: 1,
            attacks: 2,
            toHit: 4,
            toWound: 3,
            Rend: null,
            damage: 1
        },
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

(async () => await writeFileAsync(__dirname + '/lordcelestant.json', JSON.stringify(lordCelestant, null, 4)))();