(()=>{"use strict";const e="Cookie Clicker OC Ideas",i="https://hyoretsu.github.io/ccideas-mod/static/upgrades.png",r=[()=>{Game.RefreshStore()}],n=e=>{let i=e;return 3===Game.elderWrath&&Game.Has("Misfortune #604")&&(i+=.01*Game.cookiesPs),i},t=e=>{let i=e;return 3===Game.elderWrath&&(Game.Has("Misfortune #600")&&(i*=1.01),Game.Has("Misfortune #601")&&(i*=1.06)),i},o=6666666666666667e13,a="misfortune",s=e=>Math.min(e.basePrice,60*Game.unbuffedCps*60*24),c=19101,u=()=>{[{name:"Misfortune #501",description:"Cursors are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"The decay of a finger will leave 4 others still pointing.",icon:[3,0],building:"Cursor",tier:a,order:c},{name:"Misfortune #502",description:"Grandmas are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"A wrinkle is a crack on the only home you have.",icon:[4,0],building:"Grandma",tier:a,order:c},{name:"Misfortune #503",description:"Farms are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"Famine is inevitable.",icon:[5,0],building:"Farm",tier:a,order:c},{name:"Misfortune #504",description:"Mines are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"The collapse under your life's work.",icon:[6,0],building:"Mine",tier:a,order:c},{name:"Misfortune #505",description:"Factories are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"True worth is not in what you make yourself, but in what you make others do for you.",icon:[7,0],building:"Factory",tier:a,order:c},{name:"Misfortune #506",description:"Banks are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"The value of money means everything to a banker.",icon:[8,0],building:"Bank",tier:a,order:c},{name:"Misfortune #507",description:"Temples are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"No idol deserves worship.",icon:[9,0],building:"Temple",tier:a,order:c},{name:"Misfortune #508",description:"Wizard towers are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"Magic is about two things — deceiving and pleasing.",icon:[10,0],building:"Wizard tower",tier:a,order:c},{name:"Misfortune #509",description:"Shipments are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"Every mile travelled maddens you just as much",icon:[11,0],building:"Shipment",tier:a,order:c},{name:"Misfortune #510",description:"Alchemy labs are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"You're turning diamonds into coal.",icon:[12,0],building:"Alchemy lab",tier:a,order:c},{name:"Misfortune #511",description:"Portals are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"Welcoming unwanted visitors.",icon:[13,0],building:"Portal",tier:a,order:c},{name:"Misfortune #512",description:"Time machines are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"You cannot run from time.",icon:[14,0],building:"Time machine",tier:a,order:c},{name:"Misfortune #513",description:"Antimatter condensers are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"The world is made of what we take from it.",icon:[15,0],building:"Antimatter condenser",tier:a,order:c},{name:"Misfortune #514",description:"Prisms are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"Staring at endless darkness can blind you forever from the light.",icon:[16,0],building:"Prism",tier:a,order:c},{name:"Misfortune #515",description:"Chancemakers are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"Life's the gamble you will never win.",icon:[17,0],building:"Chancemaker",tier:a,order:c},{name:"Misfortune #516",description:"Fractal engines are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"Losing yourself by finding others.",icon:[18,0],building:"Fractal engine",tier:a,order:c},{name:"Misfortune #517",description:"Javascript consoles are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"If things are working in your computer, they won't in others'",icon:[19,0],building:"Javascript console",tier:a,order:c},{name:"Misfortune #518",description:"Idleverses are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"There are too many of everyone, including you.",icon:[20,0],building:"Idleverse",tier:a,order:c},{name:"Misfortune #600",description:"Upgrades and buildings cost <b>-1%</b>; you gain <b>+1%</b> CpS.",quote:"True poverty is counted in betrayals.",price:1e5*o,priceFunc:s,icon:[0,0],tier:a,order:c},{name:"Misfortune #601",description:"You gain <b>+6%</b> CpS.",quote:"Some people dream of escaping misery; others dream of cookies.",price:1e8*o,priceFunc:s,icon:[0,0],tier:a,order:c},{name:"Misfortune #602",description:"You gain <b>+1%</b> of your regular CpS while the game is closed <small>(provided you have the Twin Gates of Transcendence heavenly upgrade)</small>.",quote:"Help, I'm trapped in a CC mod!",price:1e11*o,priceFunc:s,icon:[0,0],tier:a,order:c},{name:"Misfortune #603",description:"You gain <b>more CpS</b> the more milk you have.",quote:"Believe the superstitions; black cats are bad luck.",price:1e14*o,priceFunc:s,icon:[1,0],tier:a,kitten:!0,order:c},{name:"Misfortune #604",description:"Clicking gains <b>+1% of your CpS</b>.",quote:"Remember to not stay in touch.",price:1e11*o,priceFunc:s,icon:[2,0],tier:a,order:c}].forEach((r=>{const n=`${r.description}${r.quote?`<q>${r.quote}</q>`:""}`,t=[r.icon[0],r.icon[1],i],o=new Game.Upgrade(r.name,n,r.price?r.price:Game.Objects[r.building].basePrice*Game.Tiers[r.tier].price,t);o.tier=r.tier,o.mod=e,o.order=r.order,r.building?(o.buildingTie=Game.Objects[r.building],o.buildingTie1=Game.Objects[r.building],Game.Objects[r.building].tieredUpgrades[r.tier]=o):o.priceFunc=r.priceFunc,r.kitten&&(o.kitten=1),Game.Tiers[r.tier].upgrades.push(o)})),(r=>{r.forEach((r=>{const n=`${r.description}${r.quote?`<q>${r.quote}</q>`:""}`,t=[r.icon[0],r.icon[1],i],o=new Game.Upgrade(r.name,n,r.price,t);o.mod=e,o.pool="prestige",o.order=r.order,r.parents.forEach((e=>{o.parents.push(Game.Upgrades[e])})),[o.posX,o.posY]=r.position,Game.PrestigeUpgrades.push(o)}))})([{name:"Misfortune cookies",description:'The news ticker may occasionally have <b>misfortunes</b>, which may be clicked for "something".',quote:"These taste quite bad — but then again, what's even the point?",price:66666666666,icon:[0,1],parents:["Distilled essence of redoubled luck"],position:[75,495],order:644}])},d={init:()=>{(()=>{const e=[],i=[],r=[],n=[],t=[],a=[],s=document.createElement("link");s.type="text/css",s.rel="stylesheet",s.href="https://hyoretsu.github.io/ccideas-mod/static/styles.css",document.getElementsByTagName("head")[0].appendChild(s),Object.assign(Game.Tiers,{misfortune:{color:"#7e5a40",iconRow:0,name:"Misfortune",price:o,unlock:-1,upgrades:[],special:1}}),e.push('if(!manual&&Game.Has("Misfortune cookies")&&Math.random()<(Game.HasAchiev("O Fortuna")?0.04:0.02)){const misfortunes=[];Game.Tiers.misfortune.upgrades.forEach(upgrade=>{if(!upgrade.unlocked){ misfortunes.push(upgrade);}});if(misfortunes.length>0){list=[];const chosenNews=choose(misfortunes);Game.TickerEffect={type:"fortune",sub:chosenNews};console.log(chosenNews);list=[`<span id="misfortune"><div class="icon"></div>${chosenNews.name.split(" ")[1]} : ${chosenNews.baseDesc.split("<q>")[1].split("</q>")[0]}</span>`,]}}'),i.push("if(Game.elderWrath===3&&Game.Has(building.tieredUpgrades.misfortune.name)){price*=0.94}if(Game.Has('Misfortune #600')){price*=0.99}"),r.push("if(Game.Has('Misfortune #600')){price*=0.99}"),n.push("if(Game.elderWrath===3&&Game.Has(me.tieredUpgrades.misfortune.name)){mult*=1.06}"),t.push("if(Game.Has('Misfortune #602')){percent+=1}"),a.push("if(Game.Has('Misfortune #603')){catMult*=1+Game.milkProgress*0.05*milkMult}"),Game.getNewTicker=new Function(`return ${Game.getNewTicker.toString().split("Game.TickerAge=Game.fps*10;").join(`${e.join("\n")}\n\nGame.TickerAge=Game.fps*10;`)}`)(),Game.modifyBuildingPrice=new Function(`return ${Game.modifyBuildingPrice.toString().split("return price").join(`${i.join("\n")}\n\nreturn price`)}`)(),Game.Upgrade.prototype.getPrice=new Function(`return ${Game.Upgrade.prototype.getPrice.toString().split(/\t{3}}/).join(`${r.join("\n")}\n}`)}`)(),Game.GetTieredCpsMult=new Function(`return ${Game.GetTieredCpsMult.toString().split("return mult").join(`${n.join("\n")}\n\nreturn mult`)}`)(),Game.LoadSave=new Function(`return ${Game.LoadSave.toString().split("var percent=5;").join(`var percent=5;\n\n${t.join("\n")}`)}`)(),Game.CalculateGains=new Function(`return ${Game.CalculateGains.toString().split("Game.cookiesMultByType['kittens']=catMult;").join(`${a.join("\n")}\n\nGame.cookiesMultByType['kittens']=catMult;`)}`)()})(),Game.registerHook("check",r),Game.registerHook("cookiesPerClick",n),Game.registerHook("cps",t),u()},save:()=>{const i={boughtUpgrades:[],unlockedUpgrades:[]};return Game.UpgradesById.forEach((r=>{r.mod===e&&(r.bought&&i.boughtUpgrades.push(r.name),!r.bought&&r.unlocked&&i.unlockedUpgrades.push(r.name))})),JSON.stringify(i)},load:e=>{const i=JSON.parse(e);i.unlockedUpgrades.forEach((e=>{Game.Unlock(e)})),i.boughtUpgrades.forEach((e=>{Game.Upgrades[e].bought=1}))}};Game.registerMod(e,d)})();
//# sourceMappingURL=CCIdeas.js.map