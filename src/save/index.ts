const save = (): string => {
 const saveObj: ISave = {
  boughtUpgrades: [],
  unlockedUpgrades: [],
 };

 Game.UpgradesById.forEach(upgrade => {
  if (upgrade.mod === 'ccreddit_mod') {
   if (upgrade.bought) {
    saveObj.boughtUpgrades.push(upgrade.name);
   }

   if (!upgrade.bought && upgrade.unlocked) {
    saveObj.unlockedUpgrades.push(upgrade.name);
   }
  }
 });

 return JSON.stringify(saveObj);
};

export default save;
