import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { statsService } from "../services/StatsService.js";

export class StatsController extends BaseController {
  constructor() {
    super('api/stats')
    this.router

      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createStats)
  }

  async createStats(req, res, next) {
    try {
      const data = req.body
      data.accountId = req.userInfo.id
      const stats = await statsService.createStats(data)
      return res.send(stats)
    } catch (error) {
      next(error)
    }
  }

}
