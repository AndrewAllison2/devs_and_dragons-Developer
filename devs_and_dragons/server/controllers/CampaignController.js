import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { campaignService } from "../services/CampaignService.js";

export class CampaignController extends BaseController {
  constructor() {
    super('api/campaigns')
    this.router

      .get('', this.getAllCampaigns)
      .get('/:campaignId', this.getCampaignById)

      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createCampaign)
      .delete('/:campaignId', this.archiveCampaign)
      .put('/:campaignId', this.editCampaign)
  }


  async getAllCampaigns(req, res, next) {
    try {
      const campaigns = await campaignService.getAllCampaigns()
      return res.send(campaigns)
    } catch (error) {
      next(error)
    }
  }

  async getCampaignById(req, res, next) {
    try {
      const campaignId = req.params.campaignId
      const campaign = await campaignService.getCampaignById(campaignId)
      return res.send(campaign)
    } catch (error) {
      next(error)
    }
  }
  async createCampaign(req, res, next) {
    try {
      const campaignData = req.body
      campaignData.creatorId = req.userInfo.id
      const campaign = await campaignService.createCampaign(campaignData)
      res.send(campaign)
    } catch (error) {
      next(error)
    }
  }

  async archiveCampaign(req, res, next) {
    try {
      const campaignId = req.params.campaignId
      const userId = req.userInfo.id
      const campaign = await campaignService.archiveCampaign(campaignId, userId)
      return res.send(campaign)
    } catch (error) {
      next(error)
    }
  }

  async editCampaign(req, res, next) {
    try {
      const campaignId = req.params.campaignId
      const campaignData = req.body
      const userId = req.userInfo.id
      const editedCampaign = await campaignService.editCampaign(campaignId, campaignData, userId)
      return res.send(editedCampaign)
    } catch (error) {
      next(error)
    }
  }
}