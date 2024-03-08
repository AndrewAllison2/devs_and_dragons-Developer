LIVE DEMO:
https://main--devs-and-dragons.netlify.app/#/

Devs and Dragons™️ is a D&D campaign management application designed to streamline players and dungeon masters (DM's) connections and communications across conquests and adventures. Creating and managing campaigns, notes, and recaps have become easier to manage and access so the crazy and wild adventures are only a few clicks away!

DM's and players are able to create and share their own unique content with others from around the world!

### Features
- Create and manage campaigns:
Create your own campaigns to go on wild and crazy adventures with friends or foes or manage the many intricacies of any campaign!

- Recaps:
DM's (Dungeon Master's) are able to write a recap for any of your campaigns so the next time your friends sit down to play you can instantly remember whats going on and continue your journey!


- Notes:
Players are able to create notes for themselves and others involved in the campaign to help keep track of any events or items that have been gathered or lost along the way.

- Entities:
When creating a campaign you are able to make your own unique entities or bring in other entities from different campaigns to increase and change the variety of your campaigns!

- API Endpoints:

- Campaigns:
  'api/campaigns'

- Campaigns by ID:
  'api/campaigns/{{campaignId}}'

- Notes:
  'api/notes'

- Notes by Campaign ID:
  'api/campaigns/{{campaignId}}/notes'

- Entities:
  'api/entities'

- Entities with Campaign link:
  'api/entitycampaignlinks'

- Getting links by Campaign ID:
  'api/campaigns/{{campaignId}}/entitycampaignlinks'

- Account to Campaign links:
  'api/accountcampaignlinks'

- Getting Campaigns by Account-Link:
  'account/accountcampaignlinks'

- Get account by Campaign ID:
  '{{campaignId}}/accountcampaignlinks'

Devs and Dragons UML Link:
  https://www.figma.com/file/Q2QUP9UdENjAe6f4frWzAw/Untitled?type=whiteboard&node-id=0-1&t=AaxlwMI3Nd7G3RoO-0

  ![](https://github.com/JeremyOlds/devs_and_dragons-Developer/blob/main/public/DevsHomePage.png)
  ![](https://github.com/JeremyOlds/devs_and_dragons-Developer/blob/main/public/DevsCampaignPage.png)
  ![](https://github.com/JeremyOlds/devs_and_dragons-Developer/blob/main/public/DevsActiveCampaignPage2.png)
  ![](https://github.com/JeremyOlds/devs_and_dragons-Developer/blob/main/public/DevsActiveCampaignPage1.png)
  ![](https://github.com/JeremyOlds/devs_and_dragons-Developer/blob/main/public/DevsAccountPage.png)
