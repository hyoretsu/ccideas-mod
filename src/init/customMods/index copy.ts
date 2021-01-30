export const misfortunePrice = 66666666666666666666666666666;

interface InjectObject {
 cpsMult: string[];
 getTieredCpsMult: string[];
 kittenUpgrade: string[];
 modifyBuildingPrice: string[];
 offlineCps: string[];
 ticker: string[];
 upgradeGetPrice: string[];
}

const customMods = (): void => {
 // Create injections object
 const injects: InjectObject = {
  cpsMult: [],
  getTieredCpsMult: [],
  kittenUpgrade: [],
  modifyBuildingPrice: [],
  offlineCps: [],
  ticker: [],
  upgradeGetPrice: [],
 };

 // Insert custom CSS
 const link = document.createElement('link');
 Object.assign(link, {
  type: 'text/css',
  rel: 'stylesheet',
  href: 'https://hyoretsu.github.io/ccideas-mod/static/styles.css',
 });
 document.getElementsByTagName('head')[0].appendChild(link);

 let tierCount = 10;
 const addTierCount = () => {
  tierCount *= 10;
 };

 // Tier creation
 class Tier {
  special?: 1;
  unlock: number;
  upgrades: [];

  constructor(public name: string, public color: string, public iconRow: number, public price?: number) {
   this.color = color;
   this.iconRow = iconRow;
   this.name = name;
   this.price = price || Game.Tiers[Object.keys(Game.Tiers).length - 3].price * tierCount;
   this.special = 1;
   this.unlock = -1;
   this.upgrades = [];
   addTierCount();
  }
 }

 Object.assign(Game.Tiers, {
  aura: new Tier('Aura', '#ff7e00', 3),
  luminous: new Tier('Luminous', '#faedb9', 4),
  halo: new Tier('Halo', '#ffcc2f', 5),
  misfortune: new Tier('Misfortune', '#7e5a40', 0, misfortunePrice),
 });

 // Misfortune tier injections
 injects.cpsMult.push("if(Game.Has('Misfortune #600')){mult*=1.01};if(Game.Has('Misfortune #601')){mult*=1.06}");
 injects.kittenUpgrade.push("if(Game.Has('Misfortune #603')){catMult*=1+Game.milkProgress*0.05*milkMult}");
 injects.getTieredCpsMult.push(
  'if(Game.Has(me.tieredUpgrades.misfortune.name)){switch(Game.elderWrath){case 1:mult*=1.02;break;case 2:mult*=1.04;break;case 3:mult*=1.06;break;}}',
 );
 injects.modifyBuildingPrice.push(
  "if(Game.Has(building.tieredUpgrades.misfortune.name)){switch(Game.elderWrath){case 1:price*=0.98;break;case 2:price*=0.96;break;case 3:price*=0.94;break;}}if(Game.Has('Misfortune #600')){price*=0.99;}",
 );
 injects.offlineCps.push("if(Game.Has('Misfortune #602')){percent+=1}");
 injects.ticker.push(
  // eslint-disable-next-line no-template-curly-in-string
  'if(!manual&&Game.Has("Misfortune cookies")&&Math.random()<(Game.HasAchiev("O Fortuna")?0.04:0.02)){const misfortunes=[];Game.Tiers.misfortune.upgrades.forEach(upgrade=>{if(!upgrade.unlocked){ misfortunes.push(upgrade);}});if(misfortunes.length>0){list=[];const chosenNews=choose(misfortunes);Game.TickerEffect={type:"fortune",sub:chosenNews};console.log(chosenNews);list=[`<span id="misfortune"><div class="icon"></div>${chosenNews.name.split(" ")[1]} : ${chosenNews.baseDesc.split("<q>")[1].split("</q>")[0]}</span>`,]}}',
 );
 injects.upgradeGetPrice.push("if(Game.Has('Misfortune #600')){price*=0.99}");

 // Inject code into vanilla fuctions
 Game.CalculateGains = new Function(
  `return ${Game.CalculateGains.toString()
   .split('var rawCookiesPs=Game.cookiesPs*mult;')
   .join(`${injects.getTieredCpsMult.join('\n')}` + '\n\nvar rawCookiesPs=Game.cookiesPs*mult;')}`,
 )();
 Game.GetTieredCpsMult = new Function(
  `return ${Game.GetTieredCpsMult.toString()
   .split('return mult')
   .join(`${injects.getTieredCpsMult.join('\n')}` + '\n\nreturn mult')}`,
 )();
 Game.CalculateGains = new Function(
  `return ${Game.CalculateGains.toString()
   .split("Game.cookiesMultByType['kittens']=catMult;")
   .join(`${injects.kittenUpgrade.join('\n')}` + "\n\nGame.cookiesMultByType['kittens']=catMult;")}`,
 )();
 Game.modifyBuildingPrice = new Function(
  `return ${Game.modifyBuildingPrice
   .toString()
   .split('return price')
   .join(`${injects.modifyBuildingPrice.join('\n')}` + '\n\nreturn price')}`,
 )();
 Game.LoadSave = new Function(
  `return ${Game.LoadSave.toString()
   .split('var percent=5;')
   .join('var percent=5;\n\n' + `${injects.offlineCps.join('\n')}`)}`,
 )();
 Game.getNewTicker = new Function(
  `return ${Game.getNewTicker
   .toString()
   .split('Game.TickerAge=Game.fps*10;')
   .join(`${injects.ticker.join('\n')}` + '\n\nGame.TickerAge=Game.fps*10;')}`,
 )();
 Game.Upgrade.prototype.getPrice = new Function(
  `return ${Game.Upgrade.prototype.getPrice
   .toString()
   .split(/\t{3}}/)
   .join(`${injects.upgradeGetPrice.join('\n')}` + '\n}')}`,
 )();
};

export default customMods;
