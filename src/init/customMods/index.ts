const misfortunePrice = 66666666666666666666666666666;

const customMods = (): void => {
 const tickerAddons: string[] = [];
 const modifyBuildingPriceAddons: string[] = [];
 const upgradeGetPriceAddons: string[] = [];
 const getTieredCpsMultAddons: string[] = [];
 const offlineCpsAddons: string[] = [];
 const kittenUpgradeAddons: string[] = [];

 // Insert custom CSS
 const link = document.createElement('link');
 link.type = 'text/css';
 link.rel = 'stylesheet';
 link.href = 'https://hyoretsu.github.io/ccideas-mod/static/styles.css';
 document.getElementsByTagName('head')[0].appendChild(link);

 // Aura tier
 Object.assign(Game.Tiers, {
  aura: {
   color: '#ff7e00',
   iconRow: 3,
   name: 'Aura',
   price: 111111111111111111111111111111111111111111111,
   special: 1,
   unlock: -1,
   upgrades: [],
  },
 });
 // Luminous tier
 Object.assign(Game.Tiers, {
  luminous: {
   color: '#ddb466',
   iconRow: 4,
   name: 'Luminous',
   price: 111111111111111111111111111111111111111111111,
   special: 1,
   unlock: -1,
   upgrades: [],
  },
 });
 // Misfortune tier
 Object.assign(Game.Tiers, {
  misfortune: {
   color: '#7e5a40',
   iconRow: 0,
   name: 'Misfortune',
   price: misfortunePrice,
   special: 1,
   unlock: -1,
   upgrades: [],
  },
 });

 tickerAddons.push(
  // eslint-disable-next-line no-template-curly-in-string
  'if(!manual&&Game.Has("Misfortune cookies")&&Math.random()<(Game.HasAchiev("O Fortuna")?0.04:0.02)){const misfortunes=[];Game.Tiers.misfortune.upgrades.forEach(upgrade=>{if(!upgrade.unlocked){ misfortunes.push(upgrade);}});if(misfortunes.length>0){list=[];const chosenNews=choose(misfortunes);Game.TickerEffect={type:"fortune",sub:chosenNews};console.log(chosenNews);list=[`<span id="misfortune"><div class="icon"></div>${chosenNews.name.split(" ")[1]} : ${chosenNews.baseDesc.split("<q>")[1].split("</q>")[0]}</span>`,]}}',
 );
 modifyBuildingPriceAddons.push(
  "if(Game.Has(building.tieredUpgrades.misfortune.name)){switch(Game.elderWrath){case 1:price*=0.98;break;case 2:price*=0.96;break;case 3:price*=0.94;break;}}if(Game.Has('Misfortune #600')){price*=0.99;}",
 );
 upgradeGetPriceAddons.push("if(Game.Has('Misfortune #600')){price*=0.99}");
 getTieredCpsMultAddons.push(
  'if(Game.Has(me.tieredUpgrades.misfortune.name)){switch(Game.elderWrath){case 1:mult*=1.02;break;case 2:mult*=1.04;break;case 3:mult*=1.06;break;}}',
 );
 offlineCpsAddons.push("if(Game.Has('Misfortune #602')){percent+=1}");
 kittenUpgradeAddons.push("if(Game.Has('Misfortune #603')){catMult*=1+Game.milkProgress*0.05*milkMult}");

 // Inject code into vanilla fuctions
 Game.getNewTicker = new Function(
  `return ${Game.getNewTicker
   .toString()
   .split('Game.TickerAge=Game.fps*10;')
   .join(`${tickerAddons.join('\n')}` + '\n\nGame.TickerAge=Game.fps*10;')}`,
 )();
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
