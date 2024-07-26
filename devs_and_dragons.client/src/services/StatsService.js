import App from "../App.vue";
import { AppState } from "../AppState.js";
import { Stat } from "../models/Stat.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";


class StatsService {
  async addStats(data) {
    const res = await api.post('api/stats', data)
    logger.log('CREATING STATS', res.data)
    const newStat = new Stat(res.data)
    AppState.Stats.push(newStat)
  }

  async getStatsByCampaign(campaignId) {
    const res = await api.get(`api/campaigns/${campaignId}/stats`)
    AppState.Stats = res.data.map(stat => new Stat(stat))

  }
}

export const statsService = new StatsService();
