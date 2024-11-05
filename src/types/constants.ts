export interface IItems {
    [x: string]: ISingleItem
}

export interface ISingleItem {
    hint?: string[];
    id: number;
    img: string;
    dname?: string;
    desc?: string;
    qual?: string;
    cost?: number | null;
    notes?: string | null;
    attrib?: {
    key?: string;
    header?: string;
    value?: string;
    footer?: string;
    generated?: boolean;
    }[];
    mc?: boolean | number;
    cd?: boolean | number;
    lore?: string;
    components?: string[] | null;
    created?: boolean | number;
    charges?: boolean | number;
    tier?: number;
}

export interface IGameModes {
    [x:string]: ISingleGameMode
}

export interface ISingleGameMode {
    id: number,
    name: string,
    balanced: boolean,
}

export interface IHeroesData {
    [x:string]: ISingleHero
}

export interface ISingleHero {
    id: number,
    name: string,
    primary_attr: 'agi' | 'str' | 'int' | 'all',
    attack_type: string,
    roles: string[],
    img: string,
    icon: string,
    localized_name: string,
  }