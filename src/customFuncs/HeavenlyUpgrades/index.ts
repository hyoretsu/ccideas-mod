const HeavenlyUpgrades = (data: ICreateHeavenlyUpgradeDTO[]): void => {
 data.forEach(upgradeData => {
  const desc = `${upgradeData.description}${upgradeData.quote ? `<q>${upgradeData.quote}</q>` : ''}`;
  const icon: Game.Icon = [upgradeData.icon[0], upgradeData.icon[1], process.env.UPGRADE_ICONS_URL];

  const upgrade = new Game.Upgrade(upgradeData.name, desc, upgradeData.price, icon);
  upgrade.pool = 'prestige';
  upgrade.order = upgradeData.order;

  upgradeData.parents.forEach(parent => {
   upgrade.parents.push(Game.Upgrades[parent]);
  });

  [upgrade.posX, upgrade.posY] = upgradeData.position;

  Game.PrestigeUpgrades.push(upgrade);
 });
};

export default HeavenlyUpgrades;
