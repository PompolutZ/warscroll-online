export enum TurnPhase {
    Hero,
    Move,
    Shooting,
    Charge,
    Combat,
    Battleshock,
    Any
}

export enum AbilityType {
    None,
    Command,
    Leader
}

export enum WeaponType {
    Melee,
    Missile
}

export interface WeaponProfile {
    name: string;
    type: WeaponType;
    range: number | string;
    attacks: number | string;
    toHit: number | string;
    toWound: number | string;
    rend: number | string;
    damage: number | string;
}

export interface Ability {
    name: string;
    desc: string;
    abilityActivationPhase: TurnPhase,
    affectPhases: TurnPhase[];
    type: AbilityType;
}

export interface DamageTable {
    columnName: string;
    rows: string[] | number[];
}

export interface Spell {
    name: string;
    castingValue: number | string;
    desc: string;
}

export interface Magic {
    amountOfSpells: number;
    spellNames: string[];
    spellDesc: Spell[]
}

export interface Warscroll {
    title: string;
    matchPoints: number;
    renownPoints?: number;
    wounds: number | string;
    move: number | string;
    save: number | string;
    bravery: number | string;
    weaponProfiles: WeaponProfile[];
    carries: string[][];
    damageTable?: DamageTable[];
    abilities: Ability[];
    wizard?: Magic;    
}
