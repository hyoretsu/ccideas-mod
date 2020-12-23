const HeavenlyUpgrades = (data: ICreateHeavenlyUpgradeDTO[]): any => {
 data.map(upgradeData => {
  const desc = `${upgradeData.description}<q>${upgradeData.quote}</q>`;
  const icon: Game.Icon = [upgradeData.icon[0], upgradeData.icon[1], process.env.UPGRADE_ICONS_URL];

  const upgrade = new Game.Upgrade(upgradeData.name, desc, upgradeData.price, icon);
  upgrade.mod = 'ccreddit-mod';
  upgrade.pool = 'prestige';

  upgradeData.parents.map(parent => {
   return upgrade.parents.push(Game.Upgrades[parent]);
  });

  Object.assign(Game.UpgradePositions, { [upgrade.id]: upgradeData.position });

  return upgrade;
 });
};

export default HeavenlyUpgrades;
