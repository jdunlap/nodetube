const uploadHelpers = require('../../lib/helpers/settings');
const uploadServer = uploadHelpers.uploadServer;

async function customBranding(req, res, next){
  res.locals.brandName = process.env.INSTANCE_BRAND_NAME;
  res.locals.instanceDomainName = process.env.INSTANCE_DOMAIN_NAME;
  res.locals.instanceContactEmail = process.env.INSTANCE_CONTACT_EMAIL;
  res.locals.adsenseOn = Boolean(process.env.ADSENSE_ID);
  res.locals.adsenseId = process.env.ADSENSE_ID;
  res.locals.uploadServer = uploadServer;
  res.locals.optionalHeaderOn = process.env.OPTIONAL_HEADER_ON === 'false';

  res.locals.displayEmail = process.env.DISPLAY_EMAIL === 'true';
  res.locals.displayFacebook = process.env.DISPLAY_FACEBOOK === 'true';
  res.locals.displayTwitter = process.env.DISPLAY_TWITTER === 'true';
  res.locals.displayRiot = process.env.DISPLAY_RIOT === 'true';
  res.locals.displayDiscord = process.env.DISPLAY_DISCORD === 'true';
  res.locals.displayPaypal = process.env.DISPLAY_PAYPAL === 'true';
  res.locals.displayGithub = process.env.DISPLAY_GITHUB === 'true';
  res.locals.displayReddit = process.env.DISPLAY_REDDIT === 'true';
  res.locals.displayFosstodon = process.env.DISPLAY_FOSSTODON === 'true';
  res.locals.linkEmail = process.env.LINK_EMAIL;
  res.locals.linkFacebook = process.env.LINK_FACEBOOK;
  res.locals.linkTwitter = process.env.LINK_TWITTER;
  res.locals.linkRiot = process.env.LINK_RIOT;
  res.locals.linkDiscord = process.env.LINK_DISCORD;
  res.locals.linkPaypal = process.env.LINK_PAYPAL;
  res.locals.linkGithub = process.env.LINK_GITHUB;
  res.locals.linkReddit = process.env.LINK_REDDIT;
  res.locals.linkFosstodon = process.env.LINK_FOSSTODON;

  res.locals.instanceLogo = process.env.INSTANCE_LOGO;
  res.locals.useLogo = process.env.INSTANCE_USE_LOGO === 'true'
 
  next();
}

module.exports = customBranding;
