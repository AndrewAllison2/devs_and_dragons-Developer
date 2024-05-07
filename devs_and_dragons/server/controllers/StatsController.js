import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { statsService } from "../services/StatsService.js";

export class StatsController extends BaseController {
  constructor() {
    super('api/stats')
    this.router
      .get('/statId', this.getStatById)

      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createStats)
  }

  async getStatById(req, resz, next) {
    try {
      const statId = req.params.statId
      const stat = await statsService.getStatsById(statId)
      resz.send(stat)
    }
    catch (error) {
      next(error)
    }
  }

  async createStats(req, res, next) {
    try {
      const data = req.body
      data.creatorId = req.userInfo.id
      const stats = await statsService.createStats(data)
      return res.send(stats)
    } catch (error) {
      next(error)
    }
  }

}
