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

export interface WeaponProfile {
    name: string;
    range: number;
    attacks: number;
    toHit: number;
    toWound: number;
    rend?: number;
    damage: number;
}

export interface UnitCoreStats {
    move: number;
    wounds: number;
    save: number;
    bravery: number;
}