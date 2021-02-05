(()=>{"use strict";const e="Cookie Clicker OC Ideas",o="https://hyoretsu.github.io/ccideas-mod/static/upgrades.png",i={aura:3,halo:5,luminous:4,misfortune:0},r={default:"s are <b>twice</b> as efficient.",misfortune:"s are <b>6%</b> cheaper and <b>6%</b> more efficient, scaling with the current stage of Grandmapocalypse."},n=["Cursor","Grandma","Farm","Mine","Factory","Bank","Temple","Wizard tower","Shipment","Alchemy lab","Portal","Time machine","Antimatter condenser","Prism","Chancemaker","Fractal engine","Javascript console","Idleverse"],[t,a,s,u,l,c,m,d,g,h,p,f,b,k,y,w,v,q]=n,G=6666666666666667e13;let M;const T=()=>{const e=10028,o=1e12,i={upgradeReq:"Box of chocolate buildings",mult:3};return M=[{name:`${t} cookies`,price:o,icon:[3,6],order:e,cookie:i},{name:`${a} cookies`,price:10*o,icon:[4,6],order:e,cookie:i},{name:`${s} cookies`,price:100*o,icon:[5,6],order:e,cookie:i},{name:`${u} cookies`,price:1e3*o,icon:[6,6],order:e,cookie:i},{name:`${l} cookies`,price:1e4*o,icon:[7,6],order:e,cookie:i},{name:`${c} cookies`,price:1e5*o,icon:[8,6],order:e,cookie:i},{name:`${m} cookies`,price:1e6*o,icon:[9,6],order:e,cookie:i},{name:`${d} cookies`,price:1e7*o,icon:[10,6],order:e,cookie:i},{name:`${g} cookies`,price:1e8*o,icon:[11,6],order:e,cookie:i},{name:`${h} cookies`,price:1e9*o,icon:[12,6],order:e,cookie:i},{name:`${p} cookies`,price:1e10*o,icon:[13,6],order:e,cookie:i},{name:`${f} cookies`,price:1e11*o,icon:[14,6],order:e,cookie:i},{name:`${b} cookies`,price:1e12*o,icon:[15,6],order:e,cookie:i},{name:`${k} cookies`,price:1e13*o,icon:[16,6],order:e,cookie:i},{name:`${y} cookies`,price:1e14*o,icon:[17,6],order:e,cookie:i},{name:`${w} cookies`,price:1e15*o,icon:[18,6],order:e,cookie:i},{name:`${v} cookies`,price:1e16*o,icon:[19,6],order:e,cookie:i},{name:`${q} cookies`,price:1e17*o,icon:[20,6],order:e,cookie:i}],M},A=()=>{const e="aura";return M=[{name:"Auraven",quote:"Your grandmas have successfully mastered the art of baking, and are now able to use their aura to aid them in the process.",building:a,tier:e},{name:"Hoe-Fu",quote:"Quite similar to Shovel-Fu, but with less breaking and more tilling.",building:s,tier:e},{name:"Planebreakers",quote:"By mining into the very fabric of reality itself, you found a way to get just a tiny bit more cookies.",building:u,tier:e},{name:"Perfect workers",quote:"Before you were using humans to work in your factories, but now you're using Nameks. Your productivity has increased by over 9000 percent!",building:l,tier:e},{name:"Aura banking",quote:"Overdraw into the 4th dimension!",building:c,tier:e},{name:"Aura-filled temples",quote:"After many years of devoting themselves, the followers have started to awaken a power called aura. Praying while cultivating it pleases the gods even more.",building:m,tier:e},{name:"Conversion rates",quote:"Apparently by converting aura you get about twice the amount of mana. Gonna have to fire some people for that one.",building:d,tier:e},{name:"Aura-fueled ships",quote:"Having no need for aura themselves, your astronauts distilled it into their fuel, making it even more efficient.",building:g,tier:e},{name:"Qi-kies",quote:"Through your vast comprehension of the alchemical laws, you are now able to create cookies from your own qi – qi-kies, if you will.",building:h,tier:e},{name:"Self inflection",quote:"By creating portals from qi, it seems that you can travel inside yourself. A little odd, but more cookies nonetheless.",building:p,tier:e},{name:"Aura travel",quote:"Through your comprehension of the Time Dao, you can now travel through time using your qi.",building:f,tier:e},{name:"Aura manipulators",quote:"There couldn't be that many consequences for manipulating the- [TRANSMISSION LOST].",building:b,tier:e},{name:"Aura prism",quote:"Light is energy, isn't it? Now you're making cookies out of aura.",building:k,tier:e},{name:"Aura dice",quote:"Yes, you've found a way to use your understanding of the world to affect your luck and get more cookies. *sigh* Don't you think you have enough luck already?",building:y,tier:e},{name:"Hilbert's Secret Technique",quote:"It's unreadable, just a whole lot of random squiggles.",building:w,tier:e},{name:"Aura hardware",quote:"It's an algorithm, I swear! It really doubles your cookie production. Don't ask how it works.",building:v,tier:e},{name:"Auraverse",quote:"It is said that when one's understanding of the Martial Dao gets too profound, an ocean starts forming inside of his own body, eventually becoming a full-fledged world.",building:q,tier:e}],M},H=()=>`I must've called about ${Beautify(Game.cookiesPs)} times.`,$=()=>{const e="halo";return M=[{name:"Halo flames",quote:"They're easier to work with.",building:a,tier:e},{name:"Halo scarecrow hat",quote:"It serves to ward off animals in the dark.",building:s,tier:e},{name:"Halo cap",quote:"It really helps to see in the dark!",building:u,tier:e},{name:"Halo light bulbs",quote:"These'll be sure to provide good lighting to all those workers throughout the nigh- I mean, when they need it in their law-abiding work hours.",building:l,tier:e},{name:"Halo coins",quote:"They don't have the shape you're used to seeing, but that saves resources.",building:c,tier:e},{name:"Halo headgear",building:m,tier:e},{name:"Halo hats",quote:"Wards off 99% of dark magic!",building:d,tier:e},{name:"Halo nose cone",quote:"Outer space is so dark, isn't it? Well, not anymore.",building:g,tier:e},{name:"Halo transmutation",building:h,tier:e},{name:"Halo portal",quote:"You're now getting cookies from halos here and there.",building:p,tier:e},{name:"Halo bezel",building:f,tier:e},{name:"Halo condensers",quote:"... and the factor of holiness per halo condensed is a function where n is the number of halos and g is the universal condescension constant, 2^ng.",building:b,tier:e},{name:"Halo refraction",quote:"A halo also gives off light, doesn't it? I guess at this point it doesn't really matter, you'll find a way to make cookies with them.",building:k,tier:e},{name:"No dice",quote:"I have them all :)",building:y,tier:e},{name:"Halo fractals",quote:"Reflect upon yourself, then again, then again, then again, and now you have a massive space filling curve.",building:w,tier:e},{name:"Halo LED",quote:"It's shiny.",building:v,tier:e},{name:"Halo from the other side",quote:H(),building:q,tier:e}],M},S=()=>{const e="luminous";return M=[{name:"Luminous grandmas",quote:"Your grandmas have called their long-lost relatives to help them bake more cookies.",building:a,tier:e},{name:"Luminous seeds",quote:"Through your advancements in the field of agriculture, you've discovered some sort of luminescent seed. It's still unclear whether it's safe or not, but it yields more crops than normal ones.",building:s,tier:e},{name:"Luminous refining",quote:"By mixing the cookie dough you mine with a mysterious luminescent powder, you are able to make them yield more and become tastier.",building:u,tier:e},{name:"Luminous labor",quote:"By doing some shenanigans to a strange luminous powder that was recently discovered, you managed to create an entirely new workforce. They're fast, efficient and don't need to rest!",building:l,tier:e},{name:"Luminous cash",quote:"You've created a new currency coated in a strange luminous powder. You don't really know what it is or where it came from, but gold is shiny, so it's obviously more valuable, right?",building:c,tier:e},{name:"Luminous temples",quote:"This strange powder shines. You put it all around your temples. Gods like shiny things.",building:m,tier:e},{name:"Luminous catalyst",quote:"Wizards have discovered that by condensing mana, they are able to make a mysterious luminescent powder. This, in turn, is highly effective as a catalyst when using spells.",building:d,tier:e},{name:"Luminous fuel",quote:"By mixing normal fuel and a solution of a mysterious luminous powder and alchohol, it becomes highly more potent.",building:g,tier:e},{name:"Luminous transmutation",quote:"This mysterious luminous powder is very dense, so you're able transmute it into a lot more cookies.",building:h,tier:e},{name:"Luminous portal",quote:"The portal to heaven will surely have a godly light, right? And it'll obviously be packed with cookies.",building:p,tier:e},{name:"Luminous travel",quote:"By using a strange luminous powder in your time machines, you can know where exactly you're going in spacetime more precisely. Yes, it works. Don't ask how.",building:f,tier:e},{name:"Luminous condensers",building:b,tier:e},{name:"Luminous prism",quote:"Well, you convert light into cookies. So if the prism is coated in luminous powder it'll obviously create more cookies.",building:k,tier:e},{name:"Luminous dice",quote:"Now there are sparks whenever you spawn cookies. It's entertaining, so people do it more often.",building:y,tier:e},{name:"Luminous fractals",building:w,tier:e},{name:"Luminous hardware",quote:"Hey, it works okay? RGB mice and keyboard boost computer performance.",building:v,tier:e},{name:"Luminous universe",quote:"Brand new galaxies to explore, full with a strange luminous material everywhere... Regardless, that means tons of extra cookies to get!",building:q,tier:e}],M},U=()=>{const e="misfortune",o=e=>Math.min(e.basePrice,60*Game.unbuffedCps*60*24),i=19101;return M=[{name:"Misfortune #501",quote:"The decay of a finger will leave 4 others still pointing.",building:t,tier:e,order:i},{name:"Misfortune #502",quote:"A wrinkle is a crack on the only home you have.",building:a,tier:e,order:i},{name:"Misfortune #503",quote:"Famine is inevitable.",building:s,tier:e,order:i},{name:"Misfortune #504",quote:"The collapse under your life's work.",building:u,tier:e,order:i},{name:"Misfortune #505",quote:"True worth is not in what you make yourself, but in what you make others do for you.",building:l,tier:e,order:i},{name:"Misfortune #506",quote:"The value of money means everything to a banker.",building:c,tier:e,order:i},{name:"Misfortune #507",quote:"No idol deserves worship.",building:m,tier:e,order:i},{name:"Misfortune #508",quote:"Magic is about two things — deceiving and pleasing.",building:d,tier:e,order:i},{name:"Misfortune #509",quote:"Every mile travelled maddens you just as much.",building:g,tier:e,order:i},{name:"Misfortune #510",quote:"You're turning diamonds into coal.",building:h,tier:e,order:i},{name:"Misfortune #511",quote:"Welcoming unwanted visitors.",building:p,tier:e,order:i},{name:"Misfortune #512",quote:"You cannot run from time.",building:f,tier:e,order:i},{name:"Misfortune #513",quote:"The world is made of what we take from it.",building:b,tier:e,order:i},{name:"Misfortune #514",quote:"Staring at endless darkness can blind you forever from the light.",building:k,tier:e,order:i},{name:"Misfortune #515",quote:"Life's the gamble you will never win.",building:y,tier:e,order:i},{name:"Misfortune #516",quote:"Losing yourself by finding others.",building:w,tier:e,order:i},{name:"Misfortune #517",quote:"If things are working in your computer, they won't in others'.",building:v,tier:e,order:i},{name:"Misfortune #518",quote:"There are too many of everyone, including you.",building:q,tier:e,order:i},{name:"Misfortune #600",description:"Upgrades and buildings cost <b>-1%</b>; you gain <b>+1%</b> CpS.",quote:"True poverty is counted in betrayals.",price:1e5*G,priceFunc:o,icon:[0,0],tier:e,order:i},{name:"Misfortune #601",description:"You gain <b>+6%</b> CpS.",quote:"Some people dream of escaping misery; others dream of cookies.",price:1e8*G,priceFunc:o,icon:[0,0],tier:e,order:i},{name:"Misfortune #602",description:"You gain <b>+1%</b> of your regular CpS while the game is closed <small>(provided you have the Twin Gates of Transcendence heavenly upgrade)</small>.",quote:"Help, I'm trapped in a CC mod!",price:1e11*G,priceFunc:o,icon:[0,0],tier:e,order:i},{name:"Misfortune #603",description:"You gain <b>more CpS</b> the more milk you have.",quote:"Believe the superstitions; black cats are bad luck.",price:1e14*G,priceFunc:o,icon:[1,0],tier:e,kitten:!0,order:i},{name:"Misfortune #604",description:"Clicking gains <b>+1% of your CpS</b>.",quote:"Remember to not stay in touch.",price:1e11*G,priceFunc:o,icon:[2,0],tier:e,order:i}],M},C=()=>{[...T()].forEach((i=>{const r=i.quote?`<q>${i.quote}</q>`:"",n=(i.description||`Cookie production multiplier <b>+${i.cookie.mult}%</b>.`)+r,t=[i.icon[0],i.icon[1],o],a=new Game.Upgrade(i.name,n,i.price,t);return a.mod=e,i.order&&(a.order=i.order),i.cookie&&(a.pool="cookie",a.power=i.cookie.mult,a.unlockAt={cookies:i.price/20,name:i.name,require:i.cookie.upgradeReq},Game.cookieUpgrades.push(a),Game.UnlockAt.push(a.unlockAt)),a})),(t=>{t.forEach((t=>{const a=t.quote?`<q>${t.quote}</q>`:"",s=r[t.tier]||r.default,u=(t.description||t.building.replace(/y$/,"ie")+s)+a;let l;l=t.icon?[t.icon[0],t.icon[1],o]:[n.indexOf(t.building)+3,i[t.tier],o];const c=t.price||Game.Objects[t.building].basePrice*Game.Tiers[t.tier].price,m=new Game.Upgrade(t.name,u,c,l);m.mod=e,t.building?(t.order||("Cursor"===t.building?m.order=100:m.order=Math.floor(Game.Objects[t.building].tieredUpgrades[1].order)+.9999),Game.SetTier(t.building,t.tier)):(t.priceFunc&&(m.priceFunc=t.priceFunc),m.tier=t.tier),t.order&&(m.order=t.order),t.kitten&&(m.kitten=1,Game.UpgradesByPool.kitten.push(m)),Game.Tiers[t.tier].upgrades.push(m)}))})([...$(),...A(),...S(),...U()]),(i=>{i.forEach((i=>{const r=`${i.description}${i.quote?`<q>${i.quote}</q>`:""}`,n=[i.icon[0],i.icon[1],o],t=new Game.Upgrade(i.name,r,i.price,n);t.mod=e,t.pool="prestige",t.order=i.order,i.parents.forEach((e=>{t.parents.push(Game.Upgrades[e])})),[t.posX,t.posY]=i.position,Game.PrestigeUpgrades.push(t)}))})([{name:"Box of chocolate buildings",description:"Contains an assortment of cookies shaped like the buildings that produce those same cookies.",quote:"Wait, I've seen these before...",price:1e3,icon:[1,1],parents:["Starter kit"],position:[-460,-430],order:256},{name:"Misfortune cookies",description:'The news ticker may occasionally have <b>misfortunes</b>, which may be clicked for "something".',quote:"These taste quite bad — but then again, what's even the point?",price:66666666666,icon:[0,1],parents:["Distilled essence of redoubled luck"],position:[75,495],order:644}])},L=[...Game.ObjectsById.filter((e=>1===e.vanilla&&"Cursor"!==e.name)).map((e=>()=>{Game.Has("Aura gloves")&&e.level>=5&&e.amount>=1&&Game.Unlock(e.tieredUpgrades.aura.name)})),...Game.ObjectsById.filter((e=>1===e.vanilla&&"Cursor"!==e.name)).map((e=>()=>{Game.Has("Halo gloves")&&e.amount>=1&&Game.Unlock(e.tieredUpgrades.halo.name)})),()=>{const e=Game.Upgrades["Halo from the other side"];e.desc=e.desc.replace(e.desc.split(/<\/?q>/)[1],H())},...Game.ObjectsById.filter((e=>1===e.vanilla&&"Cursor"!==e.name)).map((e=>()=>{Game.Has("Luminous gloves")&&e.level>=10&&e.amount>=1&&Game.Unlock(e.tieredUpgrades.luminous.name)}))],I=e=>{let o=e;return Game.Has("Misfortune #604")&&(o+=.01*Game.cookiesPs),o},B=e=>{let o=e;return Game.Has("Misfortune #600")&&(o*=1.01),Game.Has("Misfortune #601")&&(o*=1.06),o};let j;const F=e=>{const o=["Aura furnace","Aura oven","Aura seeds","Aura pickaxe","Aura cogs","Aura cash","Aura spells","Aura fuel","Aura transmutation","Aura portal","Aura condensers","Aura fractals","Aura universe"].indexOf(e);o>=0&&(j=["Aura oven","Auraven","Hoe-Fu","Planebreakers","Perfect workers","Aura banking","Conversion rates","Aura-fueled ships","Qi-kies","Self inflection","Aura manipulators","Hilbert's Secret Technique","Auraverse"][o])},P={init:()=>{(()=>{const e=[],o=[],i=[],r=[],n=[],t=[],a=document.createElement("link");a.type="text/css",a.rel="stylesheet",a.href="https://hyoretsu.github.io/ccideas-mod/static/styles.css",document.getElementsByTagName("head")[0].appendChild(a);const s=Game.Tiers[Object.keys(Game.Tiers).length-3].price;let u=10;const l=()=>{u*=10},c={halo:{color:"#ffcc2f",iconRow:5,name:"Halo",price:s*u,unlock:-1,upgrades:[]}};l();const m={aura:{color:"#ff7e00",iconRow:3,name:"Aura",price:s*u,unlock:-1,upgrades:[]}};l();const d={luminous:{color:"#faedb9",iconRow:4,name:"Luminous",price:s*u,unlock:-1,upgrades:[]}};l();const g={misfortune:{color:"#7e5a40",iconRow:0,name:"Misfortune",price:G,special:1,unlock:-1,upgrades:[]}};Object.assign(Game.Tiers,m,c,d,g),e.push('if(!manual&&Game.Has("Misfortune cookies")&&Math.random()<(Game.HasAchiev("O Fortuna")?0.04:0.02)){const misfortunes=[];Game.Tiers.misfortune.upgrades.forEach(upgrade=>{if(!upgrade.unlocked){ misfortunes.push(upgrade);}});if(misfortunes.length>0){list=[];const chosenNews=choose(misfortunes);Game.TickerEffect={type:"fortune",sub:chosenNews};console.log(chosenNews);list=[`<span id="misfortune"><div class="icon"></div>${chosenNews.name.split(" ")[1]} : ${chosenNews.baseDesc.split("<q>")[1].split("</q>")[0]}</span>`,]}}'),o.push("if(building.vanilla===1&&Game.Has(building.tieredUpgrades.misfortune.name)){switch(Game.elderWrath){case 1:price*=0.98;break;case 2:price*=0.96;break;case 3:price*=0.94;break;}}if(Game.Has('Misfortune #600')){price*=0.99;}"),i.push("if(Game.Has('Misfortune #600')){price*=0.99}"),r.push("if(me.vanilla===1&&Game.Has(me.tieredUpgrades.misfortune.name)){switch(Game.elderWrath){case 1:mult*=1.02;break;case 2:mult*=1.04;break;case 3:mult*=1.06;break;}}"),n.push("if(Game.Has('Misfortune #602')){percent+=1}"),t.push("if(Game.Has('Misfortune #603')){catMult*=1+Game.milkProgress*0.05*milkMult}"),Game.getNewTicker=new Function(`return ${Game.getNewTicker.toString().split("Game.TickerAge=Game.fps*10;").join(`${e.join("\n")}\n\nGame.TickerAge=Game.fps*10;`)}`)(),Game.modifyBuildingPrice=new Function(`return ${Game.modifyBuildingPrice.toString().split("return price").join(`${o.join("\n")}\n\nreturn price`)}`)(),Game.Upgrade.prototype.getPrice=new Function(`return ${Game.Upgrade.prototype.getPrice.toString().split(/\t{3}}/).join(`${i.join("\n")}\n}`)}`)(),Game.GetTieredCpsMult=new Function(`return ${Game.GetTieredCpsMult.toString().split("return mult").join(`${r.join("\n")}\n\nreturn mult`)}`)(),Game.LoadSave=new Function(`return ${Game.LoadSave.toString().split("var percent=5;").join(`var percent=5;\n\n${n.join("\n")}`)}`)(),Game.CalculateGains=new Function(`return ${Game.CalculateGains.toString().split("Game.cookiesMultByType['kittens']=catMult;").join(`${t.join("\n")}\n\nGame.cookiesMultByType['kittens']=catMult;`)}`)()})(),Game.registerHook("check",L),Game.registerHook("cookiesPerClick",I),Game.registerHook("cps",B),C()},save:()=>{const o={boughtUpgrades:[],unlockedUpgrades:[]};return Game.UpgradesById.filter((o=>o.mod===e)).forEach((e=>{e.bought?o.boughtUpgrades.push(e.name):e.unlocked&&o.unlockedUpgrades.push(e.name)})),JSON.stringify(o)},load:e=>{const o=JSON.parse(e);o.unlockedUpgrades.forEach((e=>{F(e),Game.Unlock(j||e)})),o.boughtUpgrades.forEach((e=>{F(e),Game.Upgrades[j||e].bought=1}))}};Game.registerMod(e,P)})();
//# sourceMappingURL=CCIdeas.js.map