import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";


class StatsService {

  async getStatsById(statId) {
    const stat = await dbContext.Stats.findById(statId)
    if (!stat) {
      throw new BadRequest('Cannot find any notes by that ID')
    } return stat
  }

  async getStatsByCampaignId(campaignId) {
    const stats = await dbContext.Stats.find({ campaignId })
    return stats;
  }

  async createStats(data) {
    const stats = await dbContext.Stats.create(data)
    return stats;
  }
}

export const statsService = new StatsService();
