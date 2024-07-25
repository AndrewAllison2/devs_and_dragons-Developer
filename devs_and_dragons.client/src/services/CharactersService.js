import { AppState } from "../AppState.js"
import { Character } from "../models/Character.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class CharactersService {

  async createCharcter(data) {
    const res = await api.post('api/characters', data)
    AppState.characters.push(new Character(res.data))
    logger.log("APPSTATE CHARACTER", AppState.characters)
  }

}

export const charactersService = new CharactersService()
