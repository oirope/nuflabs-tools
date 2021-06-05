import { IDMap } from './utils';

export type Weapon = {
	name: string;
	damage: () => number;
	block: () => number;
	piercing: () => number;
};

export type Weapons = IDMap<Weapon>;
