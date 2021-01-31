import { modName, upgradeIconsUrl } from '@config';

const Upgrades = (data: ICreateUpgradeDTO[]): any => {
 data.forEach(upgradeData => {
  const quote = upgradeData.quote ? `<q>${upgradeData.quote}</q>` : '';
  // @ts-ignore If a description isn't provided, it'll be a cookie
  const desc = (upgradeData.description || `Cookie production multiplier <b>+${upgradeData.cookie.mult}%</b>.`) + quote;

  const icon: Game.Icon = [upgradeData.icon[0], upgradeData.icon[1], upgradeIconsUrl];

  const upgrade = new Game.Upgrade(upgradeData.name, desc, upgradeData.price, icon);
  upgrade.mod = modName;
  upgradeData.order && (upgrade.order = upgradeData.order);

  if (upgradeData.cookie) {
   upgrade.pool = 'cookie';
   upgrade.power = upgradeData.cookie.mult;
   upgrade.unlockAt = {
    cookies: upgradeData.price / 20,
    name: upgradeData.name,
    require: upgradeData.cookie.upgradeReq,
   };

   Game.cookieUpgrades.push(upgrade);
   Game.UnlockAt.push(upgrade.unlockAt);
  }

  return upgrade;
 });
};

export default Upgrades;
