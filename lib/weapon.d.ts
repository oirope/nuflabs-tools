import { Named, IDMap, Randomizable } from './utils';

type WeaponTraits = {
	damage: Randomizable;
	block: Randomizable;
	piercing?: Randomizable;
	range?: number;
};

export type Modifier = Named & Partial<WeaponTraits>;

export type WeaponType = Named &
	WeaponTraits & {
		modifiers?: Modifier[];
	};

export type Weapon = WeaponType & {
	modifier?: Modifier;
};

export type Weapons = IDMap<WeaponType>;
