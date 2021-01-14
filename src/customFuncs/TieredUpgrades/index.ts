import { buildingsList, modName, tierDescs, tierRows, upgradeIconsUrl } from '@config';

const TieredUpgrades = (data: ICreateTieredUpgradeDTO[]): void => {
 data.forEach(upgradeData => {
  let desc: string;
  let icon: Game.Icon;
  let price: number;
  const quote = upgradeData.quote ? `<q>${upgradeData.quote}</q>` : '';

  upgradeData.description
   ? (desc = upgradeData.description + quote)
   : // @ts-ignore
     (desc = upgradeData.building + (tierDescs[upgradeData.tier] || tierDescs.default) + quote);

  upgradeData.icon
   ? (icon = [upgradeData.icon[0], upgradeData.icon[1], upgradeIconsUrl])
   : // @ts-ignore If this is ever reached, there will be a building in upgradeData
     (icon = [buildingsList.indexOf(upgradeData.building) + 3, tierRows[upgradeData.tier], upgradeIconsUrl]);

  upgradeData.price
   ? (price = upgradeData.price)
   : // @ts-ignore If this is ever reached, there will be a building in upgradeData
     (price = Game.Objects[upgradeData.building].basePrice * Game.Tiers[upgradeData.tier].price);

  const upgrade = new Game.Upgrade(upgradeData.name, desc, price, icon);
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
