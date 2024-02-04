import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { characterService } from "../services/CharacterService.js";

export class CharacterController extends BaseController {
  constructor() {
    super('api/characters')
    this.router

      .get('', this.getCharacters)
      .get('/:characterId', this.getCharacterbyId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createCharacter)

  }

  async createCharacter(req, res, next) {
    try {
      const data = req.body
      data.creatorId = req.userInfo.id
      const character = await characterService.createCharacter(data)
      res.send(character)
    } catch (error) {
      next(error)
    }
  }

  async getCharacters(req, res, next) {
    try {
      const characters = await characterService.getCharacters()
      res.send(characters)
    } catch (error) {
      next(error)
    }
  }

  async getCharacterbyId(req, res, next) {
    try {
      const characterId = req.params.characterId
      const character = await characterService.getCharacterById(characterId)
      res.send(character)
    } catch (error) {
      next(error)
    }
  }
}