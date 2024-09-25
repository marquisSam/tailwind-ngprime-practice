export interface DndItem {
  id: number;
  name: string;
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
