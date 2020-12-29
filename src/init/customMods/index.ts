const misfortunePrice = 66666666666666666666666666666;

const customMods = (): void => {
 const offlineCpsAddons: string[] = [];
 const modifyBuildingPriceAddons: string[] = [];
 const upgradeGetPriceAddons: string[] = [];
 const getTieredCpsMultAddons: string[] = [];
 const kittenUpgradeAddons: string[] = [];

 // Create Misfortune tier
 Object.assign(Game.Tiers, {
  misfortune: {
   color: '#7e5a40',
   iconRow: 0,
   name: 'Misfortune',
   price: misfortunePrice,
   unlock: -1,
   upgrades: [],
   special: 1,
  },
 });
 modifyBuildingPriceAddons.push(
  "if(Game.elderWrath===3&&Game.Has(building.tieredUpgrades.misfortune.name)){price*=0.94;}\nif(Game.Has('Misfortune #600')){price*=0.99;}",
 );
 upgradeGetPriceAddons.push("if(Game.Has('Misfortune #600')){price*=0.99;}");
 getTieredCpsMultAddons.push('if(Game.elderWrath===3&&Game.Has(me.tieredUpgrades.misfortune.name)){mult*=1.06;}');
 offlineCpsAddons.push("if(Game.Has('Misfortune #602')){percent+=1;}");
 kittenUpgradeAddons.push("if(Game.Has('Misfortune #603')){catMult*=(1+Game.milkProgress*0.05*milkMult);}");

 Game.modifyBuildingPrice = new Function(
  `return ${Game.modifyBuildingPrice
   .toString()
   .split('return price')
   .join(`${modifyBuildingPriceAddons.join('\n')}` + '\n\nreturn price')}`,
 )();
 Game.Upgrade.prototype.getPrice = new Function(
  `return ${Game.Upgrade.prototype.getPrice
   .toString()
   .split(/\t{3}}/)
   .join(`${upgradeGetPriceAddons.join('\n')}` + '\n}')}`,
 )();
 Game.GetTieredCpsMult = new Function(
  `return ${Game.GetTieredCpsMult.toString()
   .split('return mult')
   .join(`${getTieredCpsMultAddons.join('\n')}` + '\n\nreturn mult')}`,
 )();
 Game.LoadSave = new Function(
  `return ${Game.LoadSave.toString()
   .split('var percent=5;')
   .join('var percent=5;\n\n' + `${offlineCpsAddons.join('\n')}`)}`,
 )();
 Game.CalculateGains = new Function(
  `return ${Game.CalculateGains.toString()
   .split("Game.cookiesMultByType['kittens']=catMult;")
   .join(`${kittenUpgradeAddons.join('\n')}` + "\n\nGame.cookiesMultByType['kittens']=catMult;")}`,
 )();
};

export { misfortunePrice };
export default customMods;
