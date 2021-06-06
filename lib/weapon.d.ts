import { Named, IDMap, Randomizable } from './utils';

type WeaponTraits = {
	damage: Randomizable;
	block: Randomizable;
	piercing?: Randomizable;
	range?: number;
};

export type Modifier = Named & Partial<WeaponTraits>;

export type Weapon = Named &
	WeaponTraits & {
		modifier?: Modifier;
		modifiers: Modifier[];
	};

export type Weapons = IDMap<Weapon>;
