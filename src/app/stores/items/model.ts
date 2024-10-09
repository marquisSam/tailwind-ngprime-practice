export interface DndItem {
  id: string;
  name: string;
  description?: string;
  value?: number;
  weight?: number;
  rarity?: DndItemRarity;
  type?: DndItemType;
  properties?: DndItemProperties[];
}

export interface DndItemCreateDTO {
  name: string;
  description?: string | null;
  value?: number | null;
  weight?: number | null;
  rarity?: DndItemRarity | null;
  type?: DndItemType | null;
  properties?: DndItemProperties[] | [] | null;
}
export interface DndItemUpdateDTO {
  name?: string;
  description?: string;
  value?: number;
  weight?: number;
  rarity?: DndItemRarity;
  type?: DndItemType;
  properties?: DndItemProperties[];
}
export enum DndItemProperties {
  Consumable = 'Consumable',
  Healing = 'Healing',
  ExtraDimensionalStorage = 'Extra-Dimensional Storage',
  Invisibility = 'Invisibility',
  Attunement = 'Attunement',
  BonusToAC = 'Bonus to AC',
  BonusToSavingThrows = 'Bonus to Saving Throws',
  Spellcasting = 'Spellcasting',
  Charges = 'Charges',
  MagicWeapon = 'Magic Weapon',
  IncreasedCriticalDamage = 'Increased Critical Damage',
  IncreaseConstitution = 'Increase Constitution',
  SpeedIncrease = 'Speed Increase',
  ThunderDamage = 'Thunder Damage',
  ConeAreaEffect = 'Cone Area Effect',
  SummonCreature = 'Summon Creature',
}

export enum DndItemType {
  Weapon = 'Weapon',
  Armor = 'Armor',
  Potion = 'Potion',
  WondrousItem = 'Wondrous Item',
  Ring = 'Ring',
  Wand = 'Wand',
  Staff = 'Staff',
  Rod = 'Rod',
  Scroll = 'Scroll',
  Ammunition = 'Ammunition',
  Tool = 'Tool',
  Instrument = 'Instrument',
  Gear = 'Gear',
  Container = 'Container',
  Mount = 'Mount',
  Vehicle = 'Vehicle',
  Gem = 'Gem',
  Artifact = 'Artifact',
  Consumable = 'Consumable',
}

export enum DndItemRarity {
  Common = 'Common',
  Uncommon = 'Uncommon',
  Rare = 'Rare',
  VeryRare = 'Very Rare',
  Legendary = 'Legendary',
  Artifact = 'Artifact',
  Varies = 'Varies', // Sometimes used for items with rarity that can change or is not fixed.
}

interface Option {
  label: string;
  value: any;
}

export const DndItemRarityOptions: Option[] = Object.entries(DndItemRarity).map(([key, value]) => ({
  label: value,
  value: key,
}));

export const DndItemTypeOptions: Option[] = Object.entries(DndItemType).map(([key, value]) => ({
  label: value,
  value: key,
}));

export const DndItemPropertiesOptions: Option[] = Object.entries(DndItemProperties).map(([key, value]) => ({
  label: value,
  value: key,
}));

