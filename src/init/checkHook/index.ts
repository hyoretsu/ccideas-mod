const auraTierChecks = (): (() => void)[] => {
 const checkFuncsArray = Game.ObjectsById.filter(building => building.vanilla === 1).map(building => {
  return () => {
   if (Game.Has('Aura gloves') && building.level >= 5) {
    Game.Unlock(building.tieredUpgrades.aura.name);
   }
  };
 });

 return checkFuncsArray;
};
const luminousTierChecks = (): (() => void)[] => {
 const checkFuncsArray = Game.ObjectsById.filter(building => building.vanilla === 1).map(building => {
  return () => {
   if (Game.Has('Luminous gloves') && building.level >= 10) {
    Game.Unlock(building.tieredUpgrades.luminous.name);
   }
  };
 });

 return checkFuncsArray;
};

const checkHookContent = [...auraTierChecks(), ...luminousTierChecks()];

export default checkHookContent;
