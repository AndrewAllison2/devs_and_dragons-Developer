import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class CharactersService {

  async createCharcter(data) {
    logger.log(data)
    const res = await api.post('api/characters', data)
    logger.log("CREATING CHARACTER", res.data)

  }

}

export const charactersService = new CharactersService()
