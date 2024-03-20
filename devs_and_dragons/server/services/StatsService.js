import { dbContext } from "../db/DbContext.js";


class StatsService {

  async getStatsByCampaignId(campaignId) {
    const stats = await dbContext.Stats.find({ campaignId })
    return stats
  }

}

export const statsService = new StatsService();
