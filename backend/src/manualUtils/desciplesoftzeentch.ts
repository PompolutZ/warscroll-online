import {
    Warscroll,
    WeaponType,
    TurnPhase,
    AbilityType,
    DamageTable
} from './types';

export const dbPath = '/chaos/desciplesoftzeentch';

export const tzaangorEnlightened: Warscroll = {
    title: 'Tzaangor Enlightened',
    matchPoints: 100,
    renownPoints: 20,
    wounds: 3,
    move: 6,
    save: 5,
    bravery: 6,
    weaponProfiles: [
        {
            name: 'Tzeentchian Spear',
            type: WeaponType.Melee,
            range: 2,
            attacks: 2,
            toHit: 4,
            toWound: 3,
            rend: -1,
            damage: 2
        },
        {
            name: 'Vicious Beak',
            type: WeaponType.Melee,
            range: 1,
            attacks: 1,
            toHit: 4,
            toWound: 5,
            rend: null,
            damage: 1
        },
        {
            name: `Disk of Tzeentch's Teeth and Horns`,
            type: WeaponType.Melee,
            range: 1,
            attacks: `D3`,
            toHit: 4,
            toWound: 3,
            rend: -1,
            damage: `D3`
        },
    ],
    carries: [
        ['Tzeentchian Spear', 'Vicious Beak'],
        ['Tzeentchian Spear', 'Vicious Beak', `Disk of Tzeentch's Teeth and Horns`]
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
            desc: `If an **enemy** unit **within 9"** of any Tzaangor Enlightened models **fails a 
            battleshock** test, **one additional** model **flees**.`,
            abilityActivationPhase: TurnPhase.Battleshock,
            affectPhases: [TurnPhase.Battleshock],
            type: AbilityType.None
        },
        {
            name: 'Guided by the Past',
            desc: `You can **re-roll all failed hit and wound rolls** for a unit of Tzaangor
            Enligtened **if** there are **any enemy** units **within 3"** of them that have **already attacked
            this phase**.`,
            abilityActivationPhase: TurnPhase.Combat,
            affectPhases: [TurnPhase.Combat],
            type: AbilityType.None
        },
        {
            name: 'Preternatural Enhancement',
            desc: `If this unit is **within 9"** of a **Tzaangor Shaman** at the **start** of the **combat phase**,
            **add 1 to all hit rolls** you make for their **Tzeentchian Spear and Vicious Beak** attacks.`,
            abilityActivationPhase: TurnPhase.Combat,
            affectPhases: [TurnPhase.Combat],
            type: AbilityType.None
        }
    ],
};

export const lordOfChange: Warscroll = {
    title: 'Lord of Change',
    matchPoints: 100,
    renownPoints: 20,
    wounds: 14,
    move: `*`,
    save: 4,
    bravery: 10,
    weaponProfiles: [
        {
            name: `Rod of Sorcery`,
            type: WeaponType.Missile,
            range: 18,
            attacks: `2d6`,
            toHit: 3,
            toWound: 3,
            rend: null,
            damage: 1
        },
        {
            name: `Staff of Tzeentch`,
            type: WeaponType.Melee,
            range: 3,
            attacks: 3,
            toHit: 4,
            toWound: `*`,
            rend: null,
            damage: 2
        },
        {
            name: `Baleful Sword`,
            type: WeaponType.Melee,
            range: 1,
            attacks: 2,
            toHit: 4,
            toWound: 2,
            rend: -2,
            damage: 3
        },
        {
            name: `Curved Beak and Winged Talons`,
            type: WeaponType.Melee,
            range: 1,
            attacks: 4,
            toHit: 4,
            toWound: 3,
            rend: -1,
            damage: 2
        },
    ],
    carries: [
        [`Staff of Tzeentch`, `Baleful Sword`],
        [`Staff of Tzeentch`, `Rod of Sorcery`],
        [`Staff of Tzeentch`, `Curved Beak and Winged Talons`]
    ],
    abilities: [
        {
            name: 'Fly',
            desc: `Lord of Change can fly.`,
            abilityActivationPhase: TurnPhase.Any,
            affectPhases: [TurnPhase.Any],
            type: AbilityType.None
        },
        {
            name: 'Mastery of Magic',
            desc: `**When** you **make a casting
            or unbinding roll** for a Lord of Change, **change**
            the **result** of the **lowest dice** so that it **matches
            the highest**.`,
            abilityActivationPhase: TurnPhase.Hero,
            affectPhases: [TurnPhase.Hero],
            type: AbilityType.None
        },
        {
            name: 'Spell thief',
            desc: `**If** the **result of an unbinding roll** for a
            Lord of Change is **9 or more**, **it learns the spell** that
            is being cast, and **can cast it in subsequent turns**.`,
            abilityActivationPhase: TurnPhase.Hero,
            affectPhases: [TurnPhase.Hero],
            type: AbilityType.None
        },
        {
            name: 'Beacon of Sorcery',
            desc: `Spreading its arms wide, the
            Lord of Change saturates the area with magic. **If**
            a Lord of Change **uses** this ability, **then until your
            next hero phase** you can **add 1 to all casting and
            unbinding rolls** made for **friendly TZEENTCH
            DAEMON WIZARD**s that are **within 18"** of the
            Lord of Change. `,
            abilityActivationPhase: TurnPhase.Hero,
            affectPhases: [TurnPhase.Hero],
            type: AbilityType.Command
        },
    ],
    damageTable: [
        {
            columnName: `Wounds Suffered`,
            rows: [
                `0-3`, `4-6`, `7-9`, `10-12`, `13+`
            ]
        },
        {
            columnName: `Move`,
            rows: [
                `10"`, `9"`, `8"`, `7"`, `6"`
            ]
        },
        {
            columnName: `Staff of Tzeentch`,
            rows: [
                `2+`, `3+`, `3+`, `4+`, `4+`
            ]
        },
        {
            columnName: `Infernal Gateway`,
            rows: [
                `3 or more`, `4 or more`, `4 or more`, `5 or more`, `5 or more`
            ]
        },
    ],
    wizard: {
        amountOfSpells: 2,
        spellNames: ['Arcane Bolt', `Mistic Shield`, `Infernal Gateway`],
        spellDesc: [
            {
                name: 'Infernal Gateway',
                castingValue: 7,
                desc: `The Lord of Change opens a portal to the Realm
                of Chaos, pulling warriors to their doom. If successfully
                **cast**, **pick** a **visible enemy unit within 18"** of the
                caster and **roll 9 dice**. For **each roll** that **equals
                or beats** the **number** shown on the **damage table**
                above, the unit **suffers a mortal wound**.`
            }
        ]
    }  
};
