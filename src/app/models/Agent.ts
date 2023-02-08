export interface IRole {
    uuid: string;
    displayName: string;
    description: string;
    displayIcon: string;
    assetPath: string;
}

export interface IAbility {
    slot: string;
    displayName: string;
    description: string;
    displayIcon: string;
}

export interface IMediaList {
    id: number;
    wwise: string;
    wave: string;
}

export interface IVoiceLine {
    minDuration: number;
    maxDuration: number;
    mediaList: IMediaList[];
}

export interface IAgent {
    uuid: string;
    displayName: string;
    description: string;
    developerName: string;
    characterTags?: any;
    displayIcon: string;
    displayIconSmall: string;
    bustPortrait: string;
    fullPortrait: string;
    fullPortraitV2: string;
    killfeedPortrait: string;
    background: string;
    backgroundGradientColors: string[];
    assetPath: string;
    isFullPortraitRightFacing: boolean;
    isPlayableCharacter: boolean;
    isAvailableForTest: boolean;
    isBaseContent: boolean;
    role: IRole;
    abilities: IAbility[];
    voiceLine: IVoiceLine;
}