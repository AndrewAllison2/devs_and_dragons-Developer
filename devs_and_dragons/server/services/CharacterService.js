import { dbContext } from "../db/DbContext.js";

class CharacterService {

  async createCharacter(data) {
    const character = (await dbContext.Characters.create(data))
    return character;
  };
  async getCharacters() {
    const characters = await dbContext.Characters.find();
    return characters;
  }
  async getCharacterById(characterId) {
    const character = await dbContext.Characters.findById(characterId)
    return character
  };

}

export const characterService = new CharacterService();