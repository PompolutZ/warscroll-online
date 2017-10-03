"use strict";

const fs = require('fs');
const mkdirp = require('mkdirp');

const dbRoot = __dirname + '/../../db';
const db = "/db.json";

const readFileAsync = (path?: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        const p = dbRoot + (path ? path : db);
        fs.readFile(p, (error: any, data: any) => {
            if (error) reject(error);
            else resolve(data);
        })
    });
}

const writeFileAsync = (path: string, fileName: string, text: string) => {
    return new Promise(async (resolve, reject) => {
        console.log(path.split('/'));
        if (!fs.existsSync(path)) {
            mkdirp(dbRoot + path);
        }
        fs.writeFile(`${dbRoot}/${path}/${fileName}`, text, (err: any) => {
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
    Command,
    Leader
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

const tzaangorEnlightened = {
    title: 'Tzaangor Enlightened',
    matchPoints: 100,
    renownPoints: 20,
    wounds: 3,
    move: 6,
    save: 5,
    bravery: 6,
    meleeWeapons: [
        {
            name: 'Tzeentchian spear',
            range: 2,
            attacks: 2,
            toHit: 4,
            toWound: 3,
            Rend: -1,
            damage: 2
        },
        {
            name: 'Vicious beak',
            range: 1,
            attacks: 1,
            toHit: 4,
            toWound: 5,
            Rend: null,
            damage: 1
        },
        {
            name: `Disk of Tzeentch's Teeth and Horns`,
            range: 1,
            attacks: `D3`,
            toHit: 4,
            toWound: 3,
            Rend: -1,
            damage: `D3`
        },
    ],
    abilities: [
        {
            name: 'Aviarch',
            desc: `The leader of this unit is **Aviarch**. Aviarch **makes 3** attacks
            rather **2** with its **Tzeentchian Spear**.`,
            abilityActivationPhase: TurnPhase.Any,
            affectPhases: [TurnPhase.Combat, TurnPhase.Any],
            type: AbilityType.Leader
        },
        {
            name: 'Discs of Tzeenth',
            desc: `If unit of Tzaangor Enlightened is on top of the disk it
            grants them **move of 16" and the Teeth and Horns attack**. Also they **can fly**
            and have **wounds** characteristic of **4 instead of 3**. Also they gain **DEMON** keyword.`,
            abilityActivationPhase: TurnPhase.Any,
            affectPhases: [TurnPhase.Any],
            type: AbilityType.None
        },
        {
            name: 'Bubbling Stream of Secrets',
            desc: `If an enemy unit within 9" of any Tzaangor Enlightened models fails a 
            battleshock test, one additional model flees.`,
            abilityActivationPhase: TurnPhase.Battleshock,
            affectPhases: [TurnPhase.Battleshock],
            type: AbilityType.None
        },
        {
            name: 'Guided by the Past',
            desc: `You can re-roll all failed hit and wound rolls for a unit of Tzaangor
            Enligtened if there are any enemy units within 3" of them that have already attacked
            this phase.`,
            abilityActivationPhase: TurnPhase.Combat,
            affectPhases: [TurnPhase.Combat],
            type: AbilityType.None
        },
        {
            name: 'Preternatural Enhancement',
            desc: `If this unit is within 9" of a Tzaangor Shaman at the start of the combat phase,
            add 1 to all hit rolls you make for their Tzeentchian Spear and Vicious Beak attacks.`,
            abilityActivationPhase: TurnPhase.Combat,
            affectPhases: [TurnPhase.Combat],
            type: AbilityType.None
        }
    ]
};

(async () => {
    // read db
    const db = await readFileAsync();
    console.log(JSON.parse(db));

    // write 
    await writeFileAsync('/order/stormcasteternals', 'lordcelestant.json', JSON.stringify(lordCelestant, null, 4));
    await writeFileAsync('/chaos/desciplesoftzeentch', 'tzaangorenlightened.json', JSON.stringify(tzaangorEnlightened, null, 4));
})();