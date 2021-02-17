import { buildingsList, modName, tierDescs, tierRows, upgradeIconsUrl } from '@config';

const TieredUpgrades = (data: ICreateTieredUpgradeDTO[]): void => {
 data.forEach(upgradeData => {
  const quote = upgradeData.quote ? `<q>${upgradeData.quote}</q>` : '';

  const tierDesc = tierDescs[upgradeData.tier] || tierDescs.default;
  // @ts-ignore
  const desc = (upgradeData.description || upgradeData.building.replace(/y$/, 'ie') + tierDesc) + quote;

  let icon: Game.Icon;
  if (upgradeData.icon) {
   icon = [upgradeData.icon[0], upgradeData.icon[1], upgradeIconsUrl];
  } else {
   // @ts-ignore If this is ever reached, there will be a building in upgradeData
   icon = [buildingsList.indexOf(upgradeData.building) + 3, tierRows[upgradeData.tier], upgradeIconsUrl];
  }
  // @ts-ignore If "price" isn't present, "building" will
  const price = upgradeData.price || Game.Objects[upgradeData.building].basePrice * Game.Tiers[upgradeData.tier].price;

  const upgrade = new Game.Upgrade(upgradeData.name, desc, price, icon);
  upgrade.mod = modName;

  if (upgradeData.building) {
   if (upgradeData.building === 'Cursor') {
    upgrade.tier = upgradeData.tier;
    upgrade.order = 100 + 0.9999;

    if (upgrade.tier === 'misfortune') {
     Game.Objects[upgradeData.building].tieredUpgrades[upgrade.tier] = upgrade;
    }
   } else {
    Game.SetTier(upgradeData.building, upgradeData.tier);
    upgrade.order = Math.floor(Game.Objects[upgradeData.building].tieredUpgrades[1].order) + 0.9999;
   }
  } else {
   upgradeData.priceFunc && (upgrade.priceFunc = upgradeData.priceFunc);
   upgrade.tier = upgradeData.tier;
  }
  upgradeData.order && (upgrade.order = upgradeData.order);

  if (upgradeData.kitten) {
   upgrade.kitten = 1;
   Game.UpgradesByPool.kitten.push(upgrade);
  }

  Game.Tiers[upgradeData.tier].upgrades.push(upgrade);
 });
};

export default TieredUpgrades;
