export class Character {
  constructor(data) {
    this.id = data.id
    this.creatorId = data.creatorId
    this.name = data.name
    this.coverImg = data.coverImg
    this.race = data.race
    this.class = data.class
    this.level = data.level
    this.healthPoints = data.healthPoints
    this.armorClass = data.armorClass
    this.experiencePoints = data.experiencePoints
    this.strength = data.strength
    this.dexterity = data.dexterity
    this.constitution = data.constitution
    this.intelligence = data.intelligence
    this.wisdom = data.wisdom
    this.charisma = data.charisma
    this.campaignId = data.campaignId
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
  }
}
