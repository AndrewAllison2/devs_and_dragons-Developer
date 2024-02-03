import { dbContext } from "../db/DbContext.js";

class CharacterService {

  async createCharacter(data) {
    const character = (await dbContext.Characters.create(data))
    return character;
  }
}

export const characterService = new CharacterService();