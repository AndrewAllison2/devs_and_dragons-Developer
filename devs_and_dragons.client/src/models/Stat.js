export class Stat {
  constructor(data) {
    this.creatorId = data.creatorId
    this.name = data.name
    this.coverImg = data.coverImg
    this.race = data.race
    this.class = data.class
    this.level = data.level
    this.healthPoints = data.healthPoints
    this.armorClass = data.armorClass
    this.strength = data.strength
    this.dexterity = data.dexterity
    this.constitution = data.constitution
    this.intelligence = data.intelligence
    this.wisdom = data.wisdom
    this.charisma = data.charisma
    this.id = data._id
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
  }
}
