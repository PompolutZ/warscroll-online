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
    Command
}

export interface Ability {
    name: string;
    desc: string;
    abilityActivationPhase: TurnPhase;
    affectPhases: TurnPhase[];
    type: AbilityType;
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

export interface UnitCoreStats {
    move: number | string;
    wounds: number;
    save: number;
    bravery: number;
}