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
  upgrade.tier = upgradeData.tier;
  upgrade.mod = modName;
  upgrade.order = upgradeData.order;

  if (upgradeData.building) {
   upgrade.buildingTie = Game.Objects[upgradeData.building];
   upgrade.buildingTie1 = Game.Objects[upgradeData.building];
   // @ts-ignore
   Game.Objects[upgradeData.building].tieredUpgrades[upgradeData.tier] = upgrade;
  } else {
   upgrade.priceFunc = upgradeData.priceFunc;
  }

  if (upgradeData.kitten) {
   upgrade.kitten = 1;
  }

  Game.Tiers[upgradeData.tier].upgrades.push(upgrade);
 });
};

export default TieredUpgrades;
