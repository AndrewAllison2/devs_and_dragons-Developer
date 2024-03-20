import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { CampaignSchema } from "../models/CampaignSchema.js";
import { EntitySchema } from "../models/EntitySchema.js";
import { entityCampaignLinkSchema } from "../models/EntityCampaignLinkSchema.js";
import { NotesSchema } from "../models/NotesSchema.js";
import { accountCampaignLinkSchema } from "../models/AccountCampaignLinkSchema.js";
import { CharacterSchema } from "../models/CharacterSchema.js";
import { StatSchema } from "../models/StatSchema.js";

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Campaigns = mongoose.model('Campaign', CampaignSchema);
  Entities = mongoose.model('Entity', EntitySchema)
  EntityCampaignLink = mongoose.model('EntityCampaignLink', entityCampaignLinkSchema)
  Notes = mongoose.model('Note', NotesSchema)
  AccountCampaignLink = mongoose.model('AccountCampaignLink', accountCampaignLinkSchema)
  Characters = mongoose.model('Character', CharacterSchema)
  Stats = mongoose.model('Stat', StatSchema)
}

export const dbContext = new DbContext()
