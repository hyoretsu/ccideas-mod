(()=>{"use strict";const e="Cookie Clicker OC Ideas",i="https://hyoretsu.github.io/ccideas-mod/static/upgrades.png",n=e=>{let i=e;return 3===Game.elderWrath&&Game.Has("Misfortune #604")&&(i+=.01*Game.cookiesPs),i},r=e=>{let i=e;return 3===Game.elderWrath&&(Game.Has("Misfortune #600")&&(i*=1.01),Game.Has("Misfortune #601")&&(i*=1.06)),i},a=6666666666666667e13,o="aura",t="luminous",s="misfortune",c=e=>Math.min(e.basePrice,60*Game.unbuffedCps*60*24),u=19101,d=()=>{[{name:"Aura furnaces",description:"Grandmas are <b>twice</b> as efficient.",quote:"Your grandmas have successfully mastered the art of baking, and are now able to use their aura to aid them in the process.",icon:[4,3],building:"Grandma",tier:o},{name:"Aura seeds",description:"Farms are <b>twice</b> as efficient.",quote:"Your farmers have successfully mastered the art of farming, and are now able to infuse their seeds with aura to make them grow faster.",icon:[5,3],building:"Farm",tier:o},{name:"Aura pickaxes",description:"Mines are <b>twice</b> as efficient.",quote:"Your miners are now able to infuse their pickaxes with aura, making them harder than ever!",icon:[6,3],building:"Mine",tier:o},{name:"Aura cogs",description:"Factories are <b>twice</b> as efficient.",quote:"These are the epitome of all cogs, created by bending a power called aura to your will and manipulating it to create cogs. They have the perfect amount of friction.",icon:[7,3],building:"Factory",tier:o},{name:"Aura cash",description:"Banks are <b>twice</b> as efficient.",quote:"Your bankers have developed a new technique of infusing a certain type of aura into cookies, making their currency even more reliable!",icon:[8,3],building:"Bank",tier:o},{name:"Aura-filled temples",description:"Temples are <b>twice</b> as efficient.",quote:"After many years of devoting themselves, the followers have started to awaken a power called aura. Praying while cultivating it pleases the gods even more.",icon:[9,3],building:"Temple",tier:o},{name:"Aura spells",description:"Wizard towers are <b>twice</b> as efficient.",quote:"Using aura as an extra source source of mana, wizards can now summon twice as much cookies.",icon:[10,3],building:"Wizard tower",tier:o},{name:"Aura fuel",description:"Shipments are <b>twice</b> as efficient.",quote:"Having no need for aura themselves, astronauts distilled it into their fuel, making it even more efficient.",icon:[11,3],building:"Shipment",tier:o},{name:"Aura transmutation",description:"Alchemy labs are <b>twice</b> as efficient.",quote:"Through your vast comprehension of the alchemical laws, you are now able to create cookies from your own qi.",icon:[12,3],building:"Alchemy lab",tier:o},{name:"Aura portals",description:"Portals are <b>twice</b> as efficient.",quote:"Through your comprehension of the Space Dao, you can now create portals using your qi.",icon:[13,3],building:"Portal",tier:o},{name:"Aura travel",description:"Time machines are <b>twice</b> as efficient.",quote:"Through your comprehension of the Time Dao, you can now travel through time using your qi.",icon:[14,3],building:"Time machine",tier:o},{name:"Aura condensers",description:"Antimatter condensers are <b>twice</b> as efficient.",icon:[15,3],building:"Antimatter condenser",tier:o},{name:"Aura prism",description:"Prisms are <b>twice</b> as efficient.",quote:"Light is energy, isn't it? Now you're making cookies out of aura.",icon:[16,3],building:"Prism",tier:o},{name:"Aura dice",description:"Chancemakers are <b>twice</b> as efficient.",quote:"Yes, you've found a way to use your understanding of the world to affect your luck and get more cookies.",icon:[17,3],building:"Chancemaker",tier:o},{name:"Aura fractals",description:"Fractal engines are <b>twice</b> as efficient.",icon:[18,3],building:"Fractal engine",tier:o},{name:"Aura hardware",description:"Javascript consoles are <b>twice</b> as efficient.",quote:"It's an algorithm, I swear! It really doubles your cookie production. Don't ask how it works.",icon:[19,3],building:"Javascript console",tier:o},{name:"Aura multiverse",description:"Idleverses are <b>twice</b> as efficient.",quote:"It is said that when one's understanding of the Martial Dao gets too profound, an ocean starts forming inside of his own body, eventually becoming a full-fledged world.",icon:[20,3],building:"Idleverse",tier:o},{name:"Luminous grandmas",description:"Grandmas are <b>twice</b> as efficient.",quote:"Your grandmas have called their long-lost relatives to help them bake more cookies.",icon:[4,4],building:"Grandma",tier:t},{name:"Luminous seeds",description:"Farms are <b>twice</b> as efficient.",quote:"Through your advancements in the field of agriculture, you've discovered some sort of luminescent seed. It's still unclear whether it's safe or not, but it yields more crops than normal ones.",icon:[5,4],building:"Farm",tier:t},{name:"Luminous refining",description:"Mines are <b>twice</b> as efficient.",quote:"By mixing the cookie dough you mine with a mysterious luminescent powder, you are able to make them yield more and become tastier.",icon:[6,4],building:"Mine",tier:t},{name:"Luminous labor",description:"Factories are <b>twice</b> as efficient.",quote:"By doing some shenanigans to a strange luminous powder that was recently discovered, you managed to create an entirely new workforce. They're fast, efficient and don't need to rest!",icon:[7,4],building:"Factory",tier:t},{name:"Luminous cash",description:"Banks are <b>twice</b> as efficient.",quote:"You've created a new currency coated in a strange luminous powder. You don't really know what it is or where it came from, but gold is shiny, so it's obviously more valuable, right?",icon:[8,4],building:"Bank",tier:t},{name:"Luminous temples",description:"Temples are <b>twice</b> as efficient.",quote:"This strange powder shines. You put it all around your temples. Gods like shiny things.",icon:[9,4],building:"Temple",tier:t},{name:"Luminous catalyst",description:"Wizard towers are <b>twice</b> as efficient.",quote:"Wizards have discovered that by condensing mana, they are able to make a mysterious luminescent powder. This, in turn, is highly effective as a catalyst when using spells.",icon:[10,4],building:"Wizard tower",tier:t},{name:"Luminous fuel",description:"Shipments are <b>twice</b> as efficient.",quote:"By mixing normal fuel and a solution of a mysterious luminous powder and alchohol, it becomes highly more potent.",icon:[11,4],building:"Shipment",tier:t},{name:"Luminous transmutation",description:"Alchemy labs are <b>twice</b> as efficient.",quote:"This mysterious luminous powder is very dense, so you're able transmute it into a lot more cookies.",icon:[12,4],building:"Alchemy lab",tier:t},{name:"Luminous portal",description:"Portals are <b>twice</b> as efficient.",quote:"The portal to heaven will surely have a godly light, right? And it'll obviously be packed with cookies.",icon:[13,4],building:"Portal",tier:t},{name:"Luminous time travel",description:"Time machines are <b>twice</b> as efficient.",quote:"By using a strange luminous powder in your time machines, you can know where exactly you're going in spacetime more precisely. Yes, it works. Don't ask how.",icon:[14,4],building:"Time machine",tier:t},{name:"Luminous condensers",description:"Antimatter condensers are <b>twice</b> as efficient.",icon:[15,4],building:"Antimatter condenser",tier:t},{name:"Luminous prism",description:"Prisms are <b>twice</b> as efficient.",quote:"Well, you convert light into cookies. So if the prism is coated in luminous powder it'll obviously create more cookies.",icon:[16,4],building:"Prism",tier:t},{name:"Luminous dice",description:"Chancemakers are <b>twice</b> as efficient.",quote:"Now there are sparks whenever you spawn cookies. It's entertaining, so people do it more often.",icon:[17,4],building:"Chancemaker",tier:t},{name:"Luminous fractals",description:"Fractal engines are <b>twice</b> as efficient.",icon:[18,4],building:"Fractal engine",tier:t},{name:"Luminous hardware",description:"Javascript consoles are <b>twice</b> as efficient.",quote:"Hey, it works okay? RGB mice and keyboard boost computer performance.",icon:[19,4],building:"Javascript console",tier:t},{name:"Luminous universe",description:"Idleverses are <b>twice</b> as efficient.",quote:"Brand new galaxies to explore, full with a strange luminous material everywhere... Regardless, that means tons of extra cookies to get!",icon:[20,4],building:"Idleverse",tier:t},{name:"Misfortune #501",description:"Cursors are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"The decay of a finger will leave 4 others still pointing.",icon:[3,0],building:"Cursor",tier:s,order:u},{name:"Misfortune #502",description:"Grandmas are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"A wrinkle is a crack on the only home you have.",icon:[4,0],building:"Grandma",tier:s,order:u},{name:"Misfortune #503",description:"Farms are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"Famine is inevitable.",icon:[5,0],building:"Farm",tier:s,order:u},{name:"Misfortune #504",description:"Mines are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"The collapse under your life's work.",icon:[6,0],building:"Mine",tier:s,order:u},{name:"Misfortune #505",description:"Factories are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"True worth is not in what you make yourself, but in what you make others do for you.",icon:[7,0],building:"Factory",tier:s,order:u},{name:"Misfortune #506",description:"Banks are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"The value of money means everything to a banker.",icon:[8,0],building:"Bank",tier:s,order:u},{name:"Misfortune #507",description:"Temples are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"No idol deserves worship.",icon:[9,0],building:"Temple",tier:s,order:u},{name:"Misfortune #508",description:"Wizard towers are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"Magic is about two things — deceiving and pleasing.",icon:[10,0],building:"Wizard tower",tier:s,order:u},{name:"Misfortune #509",description:"Shipments are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"Every mile travelled maddens you just as much",icon:[11,0],building:"Shipment",tier:s,order:u},{name:"Misfortune #510",description:"Alchemy labs are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"You're turning diamonds into coal.",icon:[12,0],building:"Alchemy lab",tier:s,order:u},{name:"Misfortune #511",description:"Portals are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"Welcoming unwanted visitors.",icon:[13,0],building:"Portal",tier:s,order:u},{name:"Misfortune #512",description:"Time machines are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"You cannot run from time.",icon:[14,0],building:"Time machine",tier:s,order:u},{name:"Misfortune #513",description:"Antimatter condensers are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"The world is made of what we take from it.",icon:[15,0],building:"Antimatter condenser",tier:s,order:u},{name:"Misfortune #514",description:"Prisms are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"Staring at endless darkness can blind you forever from the light.",icon:[16,0],building:"Prism",tier:s,order:u},{name:"Misfortune #515",description:"Chancemakers are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"Life's the gamble you will never win.",icon:[17,0],building:"Chancemaker",tier:s,order:u},{name:"Misfortune #516",description:"Fractal engines are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"Losing yourself by finding others.",icon:[18,0],building:"Fractal engine",tier:s,order:u},{name:"Misfortune #517",description:"Javascript consoles are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"If things are working in your computer, they won't in others'",icon:[19,0],building:"Javascript console",tier:s,order:u},{name:"Misfortune #518",description:"Idleverses are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.",quote:"There are too many of everyone, including you.",icon:[20,0],building:"Idleverse",tier:s,order:u},{name:"Misfortune #600",description:"Upgrades and buildings cost <b>-1%</b>; you gain <b>+1%</b> CpS.",quote:"True poverty is counted in betrayals.",price:1e5*a,priceFunc:c,icon:[0,0],tier:s,order:u},{name:"Misfortune #601",description:"You gain <b>+6%</b> CpS.",quote:"Some people dream of escaping misery; others dream of cookies.",price:1e8*a,priceFunc:c,icon:[0,0],tier:s,order:u},{name:"Misfortune #602",description:"You gain <b>+1%</b> of your regular CpS while the game is closed <small>(provided you have the Twin Gates of Transcendence heavenly upgrade)</small>.",quote:"Help, I'm trapped in a CC mod!",price:1e11*a,priceFunc:c,icon:[0,0],tier:s,order:u},{name:"Misfortune #603",description:"You gain <b>more CpS</b> the more milk you have.",quote:"Believe the superstitions; black cats are bad luck.",price:1e14*a,priceFunc:c,icon:[1,0],tier:s,kitten:!0,order:u},{name:"Misfortune #604",description:"Clicking gains <b>+1% of your CpS</b>.",quote:"Remember to not stay in touch.",price:1e11*a,priceFunc:c,icon:[2,0],tier:s,order:u}].forEach((n=>{const r=`${n.description}${n.quote?`<q>${n.quote}</q>`:""}`,a=[n.icon[0],n.icon[1],i],o=new Game.Upgrade(n.name,r,n.price?n.price:Game.Objects[n.building].basePrice*Game.Tiers[n.tier].price,a);o.mod=e,n.building?(n.order||("Cursor"===n.building?o.order=100:o.order=Math.floor(Game.Objects[n.building].tieredUpgrades[1].order)+.9999),Game.SetTier(n.building,n.tier)):(n.priceFunc&&(o.priceFunc=n.priceFunc),o.tier=n.tier),n.order&&(o.order=n.order),n.kitten&&(o.kitten=1),Game.Tiers[n.tier].upgrades.push(o)})),(n=>{n.forEach((n=>{const r=`${n.description}${n.quote?`<q>${n.quote}</q>`:""}`,a=[n.icon[0],n.icon[1],i],o=new Game.Upgrade(n.name,r,n.price,a);o.mod=e,o.pool="prestige",o.order=n.order,n.parents.forEach((e=>{o.parents.push(Game.Upgrades[e])})),[o.posX,o.posY]=n.position,Game.PrestigeUpgrades.push(o)}))})([{name:"Misfortune cookies",description:'The news ticker may occasionally have <b>misfortunes</b>, which may be clicked for "something".',quote:"These taste quite bad — but then again, what's even the point?",price:66666666666,icon:[0,1],parents:["Distilled essence of redoubled luck"],position:[75,495],order:644}])},m={init:()=>{(()=>{const e=[],i=[],n=[],r=[],o=[],t=[],s=document.createElement("link");s.type="text/css",s.rel="stylesheet",s.href="https://hyoretsu.github.io/ccideas-mod/static/styles.css",document.getElementsByTagName("head")[0].appendChild(s),Object.assign(Game.Tiers,{aura:{color:"#ff7e00",iconRow:3,name:"Aura",price:1111111111111111e29,special:1,unlock:-1,upgrades:[]}}),Object.assign(Game.Tiers,{luminous:{color:"#ddb466",iconRow:4,name:"Luminous",price:1111111111111111e29,special:1,unlock:-1,upgrades:[]}}),Object.assign(Game.Tiers,{misfortune:{color:"#7e5a40",iconRow:0,name:"Misfortune",price:a,special:1,unlock:-1,upgrades:[]}}),e.push('if(!manual&&Game.Has("Misfortune cookies")&&Math.random()<(Game.HasAchiev("O Fortuna")?0.04:0.02)){const misfortunes=[];Game.Tiers.misfortune.upgrades.forEach(upgrade=>{if(!upgrade.unlocked){ misfortunes.push(upgrade);}});if(misfortunes.length>0){list=[];const chosenNews=choose(misfortunes);Game.TickerEffect={type:"fortune",sub:chosenNews};console.log(chosenNews);list=[`<span id="misfortune"><div class="icon"></div>${chosenNews.name.split(" ")[1]} : ${chosenNews.baseDesc.split("<q>")[1].split("</q>")[0]}</span>`,]}}'),i.push("if(Game.elderWrath===3&&Game.Has(building.tieredUpgrades.misfortune.name)){price*=0.94}if(Game.Has('Misfortune #600')){price*=0.99}"),n.push("if(Game.Has('Misfortune #600')){price*=0.99}"),r.push("if(Game.elderWrath===3&&Game.Has(me.tieredUpgrades.misfortune.name)){mult*=1.06}"),o.push("if(Game.Has('Misfortune #602')){percent+=1}"),t.push("if(Game.Has('Misfortune #603')){catMult*=1+Game.milkProgress*0.05*milkMult}"),Game.getNewTicker=new Function(`return ${Game.getNewTicker.toString().split("Game.TickerAge=Game.fps*10;").join(`${e.join("\n")}\n\nGame.TickerAge=Game.fps*10;`)}`)(),Game.modifyBuildingPrice=new Function(`return ${Game.modifyBuildingPrice.toString().split("return price").join(`${i.join("\n")}\n\nreturn price`)}`)(),Game.Upgrade.prototype.getPrice=new Function(`return ${Game.Upgrade.prototype.getPrice.toString().split(/\t{3}}/).join(`${n.join("\n")}\n}`)}`)(),Game.GetTieredCpsMult=new Function(`return ${Game.GetTieredCpsMult.toString().split("return mult").join(`${r.join("\n")}\n\nreturn mult`)}`)(),Game.LoadSave=new Function(`return ${Game.LoadSave.toString().split("var percent=5;").join(`var percent=5;\n\n${o.join("\n")}`)}`)(),Game.CalculateGains=new Function(`return ${Game.CalculateGains.toString().split("Game.cookiesMultByType['kittens']=catMult;").join(`${t.join("\n")}\n\nGame.cookiesMultByType['kittens']=catMult;`)}`)()})(),Game.registerHook("cookiesPerClick",n),Game.registerHook("cps",r),d()},save:()=>{const i={boughtUpgrades:[],unlockedUpgrades:[]};return Game.UpgradesById.forEach((n=>{n.mod===e&&(n.bought&&i.boughtUpgrades.push(n.name),!n.bought&&n.unlocked&&i.unlockedUpgrades.push(n.name))})),JSON.stringify(i)},load:e=>{const i=JSON.parse(e);i.unlockedUpgrades.forEach((e=>{Game.Unlock(e)})),i.boughtUpgrades.forEach((e=>{Game.Upgrades[e].bought=1}))}};Game.registerMod(e,m)})();
//# sourceMappingURL=CCIdeas.js.map