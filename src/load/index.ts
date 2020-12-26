const load = (saveString: string): void => {
 const save: ISave = JSON.parse(saveString);

 save.unlockedUpgrades.forEach(upgrade => {
  Game.Unlock(upgrade);
 });
 save.boughtUpgrades.forEach(upgrade => {
  Game.Upgrades[upgrade].bought = 1;
 });
};

export default load;
