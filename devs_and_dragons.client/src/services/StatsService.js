import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";


class StatsService {
  async addStats(data) {
    const res = await api.post('api/stats', data)
    logger.log('CREATING STATS', res.data)
  }

  async getStatsByCampaign(campaignId) {
    const res = await api.get(`api/camapigns/${campaignId}/stats`)

  }
}

export const statsService = new StatsService();
