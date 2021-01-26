let newName: string;
const checkIfChanged = (upgradeName: string): void => {
 const oldUpgradeNames = [
  'Aura furnace',
  'Aura oven',
  'Aura seeds',
  'Aura pickaxe',
  'Aura cogs',
  'Aura cash',
  'Aura spells',
  'Aura fuel',
  'Aura transmutation',
  'Aura portal',
  'Aura condensers',
  'Aura fractals',
  'Aura universe',
 ];
 const newUpgradeNames = [
  'Aura oven',
  'Auraven',
  'Hoe-Fu',
  'Planebreakers',
  'Perfect workers',
  'Aura banking',
  'Conversion rates',
  'Aura-fueled ships',
  'Qi-kies',
  'Self inflection',
  'Aura manipulators',
  "Hilbert's Secret Technique",
  'Auraverse',
 ];

 const oldIndex = oldUpgradeNames.indexOf(upgradeName);
 if (oldIndex >= 0) {
  newName = newUpgradeNames[oldIndex];
 }
};

const load = (saveString: string): void => {
 const save: ISave = JSON.parse(saveString);

 save.unlockedUpgrades.forEach(upgrade => {
  checkIfChanged(upgrade);
  Game.Unlock(newName || upgrade);
 });
 save.boughtUpgrades.forEach(upgrade => {
  checkIfChanged(upgrade);
  Game.Upgrades[newName || upgrade].bought = 1;
 });
};

export default load;
