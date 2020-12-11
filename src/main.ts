import ICreateHeavenlyUpgradeDTO from './dtos/ICreateHeavenlyUpgradeDTO';

const CCRedditMod: Game.Mod = {
 name: 'ccreddit_mod',
};

const upgradeIcons = '';
let order: number;
CCRedditMod.HeavenlyUpgrades = (data: ICreateHeavenlyUpgradeDTO[]): any => {
 data.map(upgradeData => {
  const desc = `${upgradeData.description}<q>${upgradeData.quote}</q>`;
  const icon: Game.Icon = [upgradeData.icon[0], upgradeData.icon[1], upgradeIcons];

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

CCRedditMod.init = () => {
 // Ran after registering building/upgrades/achievements, use it to create custom content
 Game.registerHook('create', () => {
  if (CCRedditMod.HeavenlyUpgrades) {
   CCRedditMod.HeavenlyUpgrades([
    {
     name: 'Misfortune cookies',
     description: 'The news ticker may occasionally have <b>misfortunes</b>, which may be clicked for "something".',
     quote: '',
     price: 666.666666,
     icon: [1, 0],
     parents: ['Fortune cookies'],
     position: [-173, 147],
    },
   ]);
  }
 });
};
CCRedditMod.save = () => {
 return JSON.stringify({
  test: true,
 });
};
CCRedditMod.load = (save: string) => {
 console.log(JSON.parse(save));
};

Game.registerMod(CCRedditMod.name, CCRedditMod);
