let newName: string;
const checkIfChanged = (upgradeName: string): void => {
 const oldUpgradeNames = ['Aura furnace'];
 const newUpgradeNames = ['Aura oven'];

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
