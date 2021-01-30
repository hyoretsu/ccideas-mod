import { modName } from '@config';

const save = (): string => {
 const saveObj: ISave = {
  boughtUpgrades: [],
  unlockedUpgrades: [],
 };

 Game.UpgradesById.filter(upgrade => upgrade.mod === modName).forEach(upgrade => {
  if (upgrade.bought) {
   saveObj.boughtUpgrades.push(upgrade.name);
  } else if (upgrade.unlocked) {
   saveObj.unlockedUpgrades.push(upgrade.name);
  }
 });

 return JSON.stringify(saveObj);
};

export default save;
