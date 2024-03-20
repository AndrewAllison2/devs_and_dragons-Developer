import { Schema } from "mongoose";

export const StatSchema = new Schema({
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
  name: { type: String, required: true, minLength: 3, maxLength: 100 },
  coverImg: { type: String, minLength: 3, maxLength: 400, default: "https://www.vecteezy.com/vector-art/550980-user-icon-vector" },
  race: { type: String, enum: ['human', 'elf', 'half-elf', 'dwarf', 'gnome', 'halfling', 'tiefling', 'half-orc', 'dragonborn'], required: true },
  class: { type: String, enum: ['barbarian', 'paladin', 'druid', 'wizard', 'fighter', 'ranger', 'rogue', 'bard', 'sorcerer', 'warlock', 'artificer'], lowercase: true, required: true },
  level: { type: Number, required: true, default: 1 },
  healthPoints: { type: Number, required: true },
  armorClass: { type: Number, required: true },
  strength: { type: Number, required: true, },
  dexterity: { type: Number, required: true, },
  constitution: { type: Number, required: true, },
  intelligence: { type: Number, required: true, },
  wisdom: { type: Number, required: true, },
  charisma: { type: Number, required: true, }
}, { timestamps: true, toJSON: { virtuals: true } })

StatSchema.virtual('Creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})
