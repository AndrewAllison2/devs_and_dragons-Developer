import { Schema } from "mongoose";

export const CharacterSchema = new Schema({
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
  name: { type: String, required: true, minLength: 3, maxLength: 100 },
  coverImg: { type: String, minLength: 3, maxLength: 400 },
  race: { type: String, enum: ['human', 'elf', 'half-elf', 'dwarf', 'gnome', 'halfling', 'tiefling', 'half-orc', 'dragonborn'], lowercase: true, required: true },
  class: { type: String, enum: ['barbarian', 'paladin', 'druid', 'wizard', 'fighter', 'ranger', 'rogue', 'bard', 'sorcerer', 'warlock', 'artificer'], lowercase: true, required: true },
  level: { type: Number, required: true },
  healthPoints: { type: Number, required: true },
  armorClass: { type: Number, required: true },
  strength: { type: Number, required: true, },
  dexterity: { type: Number, required: true, },
  constitution: { type: Number, required: true, },
  intelligence: { type: Number, required: true, },
  wisdom: { type: Number, required: true, },
  charisma: { type: Number, required: true, }

})