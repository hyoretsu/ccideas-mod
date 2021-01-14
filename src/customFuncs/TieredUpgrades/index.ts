import { modName, upgradeIconsUrl } from 'config';

const TieredUpgrades = (data: ICreateTieredUpgradeDTO[]): void => {
 data.forEach(upgradeData => {
  const desc = `${upgradeData.description}${upgradeData.quote ? `<q>${upgradeData.quote}</q>` : ''}`;
  const icon: Game.Icon = [upgradeData.icon[0], upgradeData.icon[1], upgradeIconsUrl];

  const upgrade = new Game.Upgrade(
   upgradeData.name,
   desc,
   upgradeData.price
    ? upgradeData.price
    : // @ts-ignore
      Game.Objects[upgradeData.building].basePrice * Game.Tiers[upgradeData.tier].price,
   icon,
  );
  upgrade.mod = modName;

  if (upgradeData.building) {
   if (!upgradeData.order) {
    upgradeData.building === 'Cursor'
     ? (upgrade.order = 100)
     : (upgrade.order = Math.floor(Game.Objects[upgradeData.building].tieredUpgrades[1].order) + 0.9999);
   }

   Game.SetTier(upgradeData.building, upgradeData.tier);
  } else {
   upgradeData.priceFunc && (upgrade.priceFunc = upgradeData.priceFunc);
   upgrade.tier = upgradeData.tier;
  }
  upgradeData.order && (upgrade.order = upgradeData.order);

  if (upgradeData.kitten) {
   upgrade.kitten = 1;
  }

  Game.Tiers[upgradeData.tier].upgrades.push(upgrade);
 });
};

export default TieredUpgrades;
