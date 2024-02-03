import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { characterService } from "../services/CharacterService.js";

export class CharacterController extends BaseController {
  constructor() {
    super('api/characters')
    this.router

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
}