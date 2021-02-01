import { haloIdleverseDesc } from '../createHook';

const auraTierChecks = (): (() => void)[] => {
 const checkFuncsArray = Game.ObjectsById.filter(building => building.vanilla === 1 && building.name !== 'Cursor').map(
  building => () => {
   if (Game.Has('Aura gloves') && building.level >= 5 && building.amount >= 1) {
    Game.Unlock(building.tieredUpgrades.aura.name);
   }
  },
 );

 return checkFuncsArray;
};
const haloTierChecks = (): (() => void)[] => {
 const checkFuncsArray = Game.ObjectsById.filter(building => building.vanilla === 1 && building.name !== 'Cursor').map(
  building => () => {
   if (Game.Has('Halo gloves') && building.amount >= 1) {
    Game.Unlock(building.tieredUpgrades.halo.name);
   }
  },
 );

 return checkFuncsArray;
};
const luminousTierChecks = (): (() => void)[] => {
 const checkFuncsArray = Game.ObjectsById.filter(building => building.vanilla === 1 && building.name !== 'Cursor').map(
  building => () => {
   if (Game.Has('Luminous gloves') && building.level >= 10 && building.amount >= 1) {
    Game.Unlock(building.tieredUpgrades.luminous.name);
   }
  },
 );

 return checkFuncsArray;
};

const checkHookContent = [
 ...auraTierChecks(),
 ...haloTierChecks(),
 (): void => {
  const upgrade = Game.Upgrades['Halo from the other side'];
  upgrade.desc = upgrade.desc.replace(upgrade.desc.split(/<\/?q>/)[1], haloIdleverseDesc());
 },
 ...luminousTierChecks(),
];

export default checkHookContent;
