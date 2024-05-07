import { Schema } from "mongoose";

export const StatSchema = new Schema({
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
  name: { type: String, required: true, minLength: 3, maxLength: 100 },
  coverImg: { type: String, minLength: 3, maxLength: 400, default: "https://www.vecteezy.com/vector-art/550980-user-icon-vector" },
  description: { type: String, maxLength: 2500 },
  race: { type: String, enum: ['Human', 'Elf', 'Half-Elf', 'Dwarf', 'Gnome', 'Halfling', 'Tiefling', 'Half-Orc', 'Dragonborn'], required: true },
  class: { type: String, enum: ['Barbarian', 'Paladin', 'Druid', 'Wizard', 'Fighter', 'Ranger', 'Rogue', 'Bard', 'Sorcerer', 'Warlock', 'Artificer'], required: true },
  level: { type: Number, required: true, default: 1 },
  healthPoints: { type: Number, required: true },
  armorClass: { type: Number, required: true },
  strength: { type: Number, required: true, },
  dexterity: { type: Number, required: true, },
  constitution: { type: Number, required: true, },
  intelligence: { type: Number, required: true, },
  wisdom: { type: Number, required: true, },
  charisma: { type: Number, required: true, },
  campaignId: { type: Schema.Types.ObjectId, required: true, ref: 'Campaign' }
}, { timestamps: true, toJSON: { virtuals: true } })

StatSchema.virtual('Creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})
