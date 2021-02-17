import * as buildings from '@config';
import { Upgrades, TieredUpgrades, HeavenlyUpgrades } from 'customFuncs';
import { misfortunePrice } from '../customMods';

let upgrades: any[];
const buildingCookies = (): ICreateUpgradeDTO[] => {
 const suffix = 'cookies';
 const order = 10028;
 const price = 1e12;

 const cookie = {
  upgradeReq: 'Box of chocolate buildings',
  mult: 3,
 };

 upgrades = [
  // Missing quote
  {
   name: `${buildings.cursor} ${suffix}`,
   price,
   icon: [3, 6],
   order,
   cookie,
  },
  // Missing quote
  {
   name: `${buildings.grandma} ${suffix}`,
   price: price * 10,
   icon: [4, 6],
   order,
   cookie,
  },
  // Missing quote
  {
   name: `${buildings.farm} ${suffix}`,
   price: price * 100,
   icon: [5, 6],
   order,
   cookie,
  },
  // Missing quote
  {
   name: `${buildings.mine} ${suffix}`,
   price: price * 1000,
   icon: [6, 6],
   order,
   cookie,
  },
  // Missing quote
  {
   name: `${buildings.factory} ${suffix}`,
   price: price * 10000,
   icon: [7, 6],
   order,
   cookie,
  },
  // Missing quote
  {
   name: `${buildings.bank} ${suffix}`,
   price: price * 100000,
   icon: [8, 6],
   order,
   cookie,
  },
  // Missing quote
  {
   name: `${buildings.temple} ${suffix}`,
   price: price * 1e6,
   icon: [9, 6],
   order,
   cookie,
  },
  // Missing quote
  {
   name: `${buildings.wizardTower} ${suffix}`,
   price: price * 1e7,
   icon: [10, 6],
   order,
   cookie,
  },
  {
   name: `${buildings.shipment} ${suffix}`,
   price: price * 1e8,
   icon: [11, 6],
   order,
   cookie,
  },
  // Missing quote
  {
   name: `${buildings.alchemyLab} ${suffix}`,
   price: price * 1e9,
   icon: [12, 6],
   order,
   cookie,
  },
  // Missing quote
  {
   name: `${buildings.portal} ${suffix}`,
   price: price * 1e10,
   icon: [13, 6],
   order,
   cookie,
  },
  // Missing quote
  {
   name: `${buildings.timeMachine} ${suffix}`,
   price: price * 1e11,
   icon: [14, 6],
   order,
   cookie,
  },
  // Missing quote
  {
   name: `${buildings.antimatterCondenser} ${suffix}`,
   price: price * 1e12,
   icon: [15, 6],
   order,
   cookie,
  },
  // Missing quote
  {
   name: `${buildings.prism} ${suffix}`,
   price: price * 1e13,
   icon: [16, 6],
   order,
   cookie,
  },
  // Missing quote
  {
   name: `${buildings.chancemaker} ${suffix}`,
   price: price * 1e14,
   icon: [17, 6],
   order,
   cookie,
  },
  // Missing quote
  {
   name: `${buildings.fractalEngine} ${suffix}`,
   price: price * 1e15,
   icon: [18, 6],
   order,
   cookie,
  },
  // Missing quote
  {
   name: `${buildings.javascriptConsole} ${suffix}`,
   price: price * 1e16,
   icon: [19, 6],
   order,
   cookie,
  },
  // Missing quote
  {
   name: `${buildings.idleverse} ${suffix}`,
   price: price * 1e17,
   icon: [20, 6],
   order,
   cookie,
  },
 ];

 return upgrades;
};

const aura = (): ICreateTieredUpgradeDTO[] => {
 const tier = 'aura';

 upgrades = [
  {
   // Bob's
   name: 'Auraven',
   quote:
    'Your grandmas have successfully mastered the art of baking, and are now able to use their aura to aid them in the process.',
   building: buildings.grandma,
   tier,
  },
  // Bob's
  {
   name: 'Hoe-Fu',
   quote: 'Quite similar to Shovel-Fu, but with less breaking and more tilling.',
   building: buildings.farm,
   tier,
  },
  // Bob's
  {
   name: 'Planebreakers',
   quote: 'By mining into the very fabric of reality itself, you found a way to get just a tiny bit more cookies.',
   building: buildings.mine,
   tier,
  },
  // Bob's
  {
   name: 'Perfect workers',
   quote:
    "Before you were using humans to work in your factories, but now you're using Nameks. Your productivity has increased by over 9000 percent!",
   building: buildings.factory,
   tier,
  },
  // Bob's
  {
   name: 'Aura banking',
   quote: 'Overdraw into the 4th dimension!',
   building: buildings.bank,
   tier,
  },
  {
   name: 'Aura-filled temples',
   quote:
    'After many years of devoting themselves, the followers have started to awaken a power called aura. Praying while cultivating it pleases the gods even more.',
   building: buildings.temple,
   tier,
  },
  // Bob's
  {
   name: 'Conversion rates',
   quote:
    'Apparently by converting aura you get about twice the amount of mana. Gonna have to fire some people for that one.',
   building: buildings.wizardTower,
   tier,
  },
  {
   // Bob's
   name: 'Aura-fueled ships',
   quote:
    'Having no need for aura themselves, your astronauts distilled it into their fuel, making it even more efficient.',
   building: buildings.shipment,
   tier,
  },
  // Bob's
  {
   name: 'Qi-kies',
   quote:
    'Through your vast comprehension of the alchemical laws, you are now able to create cookies from your own qi – qi-kies, if you will.',
   building: buildings.alchemyLab,
   tier,
  },
  // Bob's
  {
   name: 'Self inflection',
   quote:
    'By creating portals from qi, it seems that you can travel inside yourself. A little odd, but more cookies nonetheless.',
   building: buildings.portal,
   tier,
  },
  {
   name: 'Aura travel',
   quote: 'Through your comprehension of the Time Dao, you can now travel through time using your qi.',
   building: buildings.timeMachine,
   tier,
  },
  // Bob's
  {
   name: 'Aura manipulators',
   quote: "There couldn't be that many consequences for manipulating the- [TRANSMISSION LOST].",
   building: buildings.antimatterCondenser,
   tier,
  },
  {
   name: 'Aura prism',
   quote: "Light is energy, isn't it? Now you're making cookies out of aura.",
   building: buildings.prism,
   tier,
  },
  {
   name: 'Aura dice',
   // Bob's
   quote:
    "Yes, you've found a way to use your understanding of the world to affect your luck and get more cookies. *sigh* Don't you think you have enough luck already?",
   building: buildings.chancemaker,
   tier,
  },
  // Bob's
  {
   name: "Hilbert's Secret Technique",
   quote: "It's unreadable, just a whole lot of random squiggles.",
   building: buildings.fractalEngine,
   tier,
  },
  {
   name: 'Aura hardware',
   quote: "It's an algorithm, I swear! It really doubles your cookie production. Don't ask how it works.",
   building: buildings.javascriptConsole,
   tier,
  },
  {
   // Bob's
   name: 'Auraverse',
   quote:
    "It is said that when one's understanding of the Martial Dao gets too profound, an ocean starts forming inside of his own body, eventually becoming a full-fledged world.",
   building: buildings.idleverse,
   tier,
  },
 ];

 return upgrades;
};

export const haloIdleverseDesc = (): string => `I must've called about ${Beautify(Game.cookiesPs)} times.`;
const halo = (): ICreateTieredUpgradeDTO[] => {
 const tier = 'halo';

 upgrades = [
  {
   name: 'Halo flames',
   quote: "They're easier to work with.",
   building: buildings.grandma,
   tier,
  },
  {
   name: 'Halo scarecrow hat',
   quote: 'It serves to ward off animals in the dark.',
   building: buildings.farm,
   tier,
  },
  {
   name: 'Halo cap',
   quote: 'It really helps to see in the dark!',
   building: buildings.mine,
   tier,
  },
  {
   name: 'Halo light bulbs',
   quote:
    "These'll be sure to provide good lighting to all those workers throughout the nigh- I mean, when they need it in their law-abiding work hours.",
   building: buildings.factory,
   tier,
  },
  {
   name: 'Halo coins',
   quote: "They don't have the shape you're used to seeing, but that saves resources.",
   building: buildings.bank,
   tier,
  },
  // Missing quote
  {
   name: 'Halo headgear',
   building: buildings.temple,
   tier,
  },
  // Bob's
  {
   name: 'Halo hats',
   quote: 'Wards off 99% of dark magic!',
   building: buildings.wizardTower,
   tier,
  },
  {
   name: 'Halo nose cone',
   quote: "Outer space is so dark, isn't it? Well, not anymore.",
   building: buildings.shipment,
   tier,
  },
  // Seriously?
  {
   name: 'Halo transmutation',
   building: buildings.alchemyLab,
   tier,
  },
  {
   name: 'Halo portal',
   quote: "You're now getting cookies from halos here and there.",
   building: buildings.portal,
   tier,
  },
  // Missing quote
  {
   name: 'Halo bezel',
   building: buildings.timeMachine,
   tier,
  },
  {
   name: 'Halo condensers',
   // Bob's
   quote:
    '... and the factor of holiness per halo condensed is a function where n is the number of halos and g is the universal condescension constant, 2^ng.',
   building: buildings.antimatterCondenser,
   tier,
  },
  // Bob's
  {
   name: 'Halo refraction',
   quote:
    "A halo also gives off light, doesn't it? I guess at this point it doesn't really matter, you'll find a way to make cookies with them.",
   building: buildings.prism,
   tier,
  },
  // Bob's
  {
   name: 'No dice',
   quote: 'I have them all :)',
   building: buildings.chancemaker,
   tier,
  },
  {
   name: 'Halo fractals',
   // Bob's
   quote: 'Reflect upon yourself, then again, then again, then again, and now you have a massive space filling curve.',
   building: buildings.fractalEngine,
   tier,
  },
  {
   name: 'Halo LED',
   quote: "It's shiny.",
   building: buildings.javascriptConsole,
   tier,
  },
  // Bob's
  {
   name: 'Halo from the other side',
   quote: haloIdleverseDesc(),
   building: buildings.idleverse,
   tier,
  },
 ];

 return upgrades;
};

const luminous = (): ICreateTieredUpgradeDTO[] => {
 const tier = 'luminous';

 upgrades = [
  {
   name: 'Luminous grandmas',
   quote: 'Your grandmas have called their long-lost relatives to help them bake more cookies.',
   building: buildings.grandma,
   tier,
  },
  {
   name: 'Luminous seeds',
   quote:
    "Through your advancements in the field of agriculture, you've discovered some sort of luminescent seed. It's still unclear whether it's safe or not, but it yields more crops than normal ones.",
   building: buildings.farm,
   tier,
  },
  {
   name: 'Luminous refining',
   quote:
    'By mixing the cookie dough you mine with a mysterious luminescent powder, you are able to make them yield more and become tastier.',
   building: buildings.mine,
   tier,
  },
  {
   name: 'Luminous labor',
   quote:
    "By doing some shenanigans to a strange luminous powder that was recently discovered, you managed to create an entirely new workforce. They're fast, efficient and don't need to rest!",
   building: buildings.factory,
   tier,
  },
  {
   name: 'Luminous cash',
   quote:
    "You've created a new currency coated in a strange luminous powder. You don't really know what it is or where it came from, but gold is shiny, so it's obviously more valuable, right?",
   building: buildings.bank,
   tier,
  },
  {
   name: 'Luminous temples',
   quote: 'This strange powder shines. You put it all around your temples. Gods like shiny things.',
   building: buildings.temple,
   tier,
  },
  {
   name: 'Luminous catalyst',
   quote:
    'Wizards have discovered that by condensing mana, they are able to make a mysterious luminescent powder. This, in turn, is highly effective as a catalyst when using spells.',
   building: buildings.wizardTower,
   tier,
  },
  {
   name: 'Luminous fuel',
   quote:
    'By mixing normal fuel and a solution of a mysterious luminous powder and alchohol, it becomes highly more potent.',
   building: buildings.shipment,
   tier,
  },
  {
   name: 'Luminous transmutation',
   quote: "This mysterious luminous powder is very dense, so you're able transmute it into a lot more cookies.",
   building: buildings.alchemyLab,
   tier,
  },
  {
   name: 'Luminous portal',
   quote: "The portal to heaven will surely have a godly light, right? And it'll obviously be packed with cookies.",
   building: buildings.portal,
   tier,
  },
  {
   name: 'Luminous travel',
   quote:
    "By using a strange luminous powder in your time machines, you can know where exactly you're going in spacetime more precisely. Yes, it works. Don't ask how.",
   building: buildings.timeMachine,
   tier,
  },
  // Seriously?
  {
   name: 'Luminous condensers',
   building: buildings.antimatterCondenser,
   tier,
  },
  {
   name: 'Luminous prism',
   quote:
    "Well, you convert light into cookies. So if the prism is coated in luminous powder it'll obviously create more cookies.",
   building: buildings.prism,
   tier,
  },
  {
   name: 'Luminous dice',
   quote: "Now there are sparks whenever you spawn cookies. It's entertaining, so people do it more often.",
   building: buildings.chancemaker,
   tier,
  },
  // Seriously?
  {
   name: 'Luminous fractals',
   building: buildings.fractalEngine,
   tier,
  },
  {
   name: 'Luminous hardware',
   quote: 'Hey, it works okay? RGB mice and keyboard boost computer performance.',
   building: buildings.javascriptConsole,
   tier,
  },
  {
   name: 'Luminous universe',
   quote:
    'Brand new galaxies to explore, full with a strange luminous material everywhere... Regardless, that means tons of extra cookies to get!',
   building: buildings.idleverse,
   tier,
  },
 ];

 return upgrades;
};

const misfortune = (): ICreateTieredUpgradeDTO[] => {
 const tier = 'misfortune';
 const priceFunc: PriceFunc = upgrade => {
  return Math.min(upgrade.basePrice, Game.unbuffedCps * 60 * 60 * 24);
 };
 const order = 19101;

 upgrades = [
  {
   name: 'Misfortune #501',
   quote: 'The decay of a finger will leave 4 others still pointing.',
   building: buildings.cursor,
   tier,
   order,
  },
  {
   name: 'Misfortune #502',
   quote: 'A wrinkle is a crack on the only home you have.',
   building: buildings.grandma,
   tier,
   order,
  },
  {
   name: 'Misfortune #503',
   // Kiz3r's
   quote: 'Famine is inevitable.',
   building: buildings.farm,
   tier,
   order,
  },
  {
   name: 'Misfortune #504',
   // Kiz3r's
   quote: "The collapse under your life's work.",
   building: buildings.mine,
   tier,
   order,
  },
  {
   name: 'Misfortune #505',
   quote: 'True worth is not in what you make yourself, but in what you make others do for you.',
   building: buildings.factory,
   tier,
   order,
  },
  {
   name: 'Misfortune #506',
   quote: 'The value of money means everything to a banker.',
   building: buildings.bank,
   tier,
   order,
  },
  {
   name: 'Misfortune #507',
   quote: 'No idol deserves worship.',
   building: buildings.temple,
   tier,
   order,
  },
  {
   name: 'Misfortune #508',
   quote: 'Magic is about two things — deceiving and pleasing.',
   building: buildings.wizardTower,
   tier,
   order,
  },
  {
   name: 'Misfortune #509',
   quote: 'Every mile travelled maddens you just as much.',
   building: buildings.shipment,
   tier,
   order,
  },
  {
   name: 'Misfortune #510',
   // Kiz3r's
   quote: "You're turning diamonds into coal.",
   building: buildings.alchemyLab,
   tier,
   order,
  },
  {
   name: 'Misfortune #511',
   // Kiz3r's
   quote: 'Welcoming unwanted visitors.',
   building: buildings.portal,
   tier,
   order,
  },
  {
   name: 'Misfortune #512',
   // Kiz3r's
   quote: 'You cannot run from time.',
   building: buildings.timeMachine,
   tier,
   order,
  },
  {
   name: 'Misfortune #513',
   quote: 'The world is made of what we take from it.',
   building: buildings.antimatterCondenser,
   tier,
   order,
  },
  {
   name: 'Misfortune #514',
   quote: 'Staring at endless darkness can blind you forever from the light.',
   building: buildings.prism,
   tier,
   order,
  },
  {
   name: 'Misfortune #515',
   // Kiz3r's
   quote: "Life's the gamble you will never win.",
   building: buildings.chancemaker,
   tier,
   order,
  },
  {
   name: 'Misfortune #516',
   // Kiz3r's
   quote: 'Losing yourself by finding others.',
   building: buildings.fractalEngine,
   tier,
   order,
  },
  {
   name: 'Misfortune #517',
   quote: "If things are working in your computer, they won't in others'.",
   building: buildings.javascriptConsole,
   tier,
   order,
  },
  {
   name: 'Misfortune #518',
   quote: 'There are too many of everyone, including you.',
   building: buildings.idleverse,
   tier,
   order,
  },
  {
   name: 'Misfortune #600',
   description: 'Upgrades and buildings cost <b>-1%</b>; you gain <b>+1%</b> CpS.',
   quote: 'True poverty is counted in betrayals.',
   price: misfortunePrice * 1e5,
   priceFunc,
   icon: [0, 0],
   tier,
   order,
  },
  {
   name: 'Misfortune #601',
   description: 'You gain <b>+6%</b> CpS.',
   quote: 'Some people dream of escaping misery; others dream of cookies.',
   price: misfortunePrice * 1e8,
   priceFunc,
   icon: [0, 0],
   tier,
   order,
  },
  {
   name: 'Misfortune #602',
   description:
    'You gain <b>+1%</b> of your regular CpS while the game is closed <small>(provided you have the Twin Gates of Transcendence heavenly upgrade)</small>.',
   // Kiz3r's
   quote: "Help, I'm trapped in a CC mod!",
   price: misfortunePrice * 1e11,
   priceFunc,
   icon: [0, 0],
   tier,
   order,
  },
  {
   name: 'Misfortune #603',
   description: 'You gain <b>more CpS</b> the more milk you have.',
   quote: 'Believe the superstitions; black cats are bad luck.',
   price: misfortunePrice * 1e14,
   priceFunc,
   icon: [1, 0],
   tier,
   kitten: true,
   order,
  },
  {
   name: 'Misfortune #604',
   description: 'Clicking gains <b>+1% of your CpS</b>.',
   // Think of something better
   quote: 'Remember to not stay in touch.',
   price: misfortunePrice * 1e11,
   priceFunc,
   icon: [2, 0],
   tier,
   order,
  },
  // {
  //  name: 'Misfortune #666',
  //  description: 'Grandmas are <b>twice</b> as efficient.',
  //  // Kiz3r's
  //  quote: 'Old but not wise.',
  //  price: 6.666e51,
  //  icon: [19, 2],
  //  tier,
  //  order,
  // },
 ];

 return upgrades;
};

const raingrid = (): ICreateTieredUpgradeDTO[] => {
 const tier = 'raingrid';

 upgrades = [
  // Missing quote
  {
   name: 'Raingrid fingers',
   description: 'Multiplies the gain from Thousand fingers by <b>50</b>.',
   building: buildings.cursor,
   tier,
  },
  // Seriously?
  {
   name: 'Raingrid rolling pins',
   building: buildings.grandma,
   tier,
  },
  // Seriously?
  {
   name: 'Raingrid seeds',
   building: buildings.farm,
   tier,
  },
  // Seriously?
  {
   name: 'Raingrid pickaxe',
   building: buildings.mine,
   tier,
  },
  // Seriously?
  {
   name: 'Raingrid cogs',
   building: buildings.factory,
   tier,
  },
  // Seriously?
  {
   name: 'Raingrid cash',
   building: buildings.bank,
   tier,
  },
  // Seriously?
  {
   name: 'Raingrid temples',
   building: buildings.temple,
   tier,
  },
  // Seriously?
  {
   name: 'Raingrid grimoire',
   building: buildings.wizardTower,
   tier,
  },
  // Seriously?
  {
   name: 'Raingrid spaceship',
   building: buildings.shipment,
   tier,
  },
  // Seriously?
  {
   name: 'Raingrid transmutation',
   building: buildings.alchemyLab,
   tier,
  },
  // Seriously?
  {
   name: 'Raingrid portal',
   building: buildings.portal,
   tier,
  },
  // Seriously?
  {
   name: 'Raingrid paradox',
   building: buildings.timeMachine,
   tier,
  },
  // Seriously?
  {
   name: 'Raingrid condensers',
   building: buildings.antimatterCondenser,
   tier,
  },
  // Seriously?
  {
   name: 'Raingrid prism',
   building: buildings.prism,
   tier,
  },
  // Seriously?
  {
   name: 'Raingrid dice',
   building: buildings.chancemaker,
   tier,
  },
  // Seriously?
  {
   name: 'Raingrid fractals',
   building: buildings.fractalEngine,
   tier,
  },
  // Seriously?
  {
   name: 'Raingrid functions',
   building: buildings.javascriptConsole,
   tier,
  },
  // Seriously?
  {
   name: 'Raingrid universe',
   building: buildings.idleverse,
   tier,
  },
 ];

 return upgrades;
};

const createHook = (): void => {
 Upgrades([...buildingCookies()]);
 TieredUpgrades([...raingrid(), ...halo(), ...aura(), ...luminous(), ...misfortune()]);
 HeavenlyUpgrades([
  {
   name: 'Box of chocolate buildings',
   description: 'Contains an assortment of cookies shaped like the buildings that produce those same cookies.',
   quote: "Wait, I've seen these before...",
   price: 1000,
   icon: [1, 1],
   parents: ['Starter kit'],
   position: [-460, -430],
   order: 256,
  },
  {
   name: 'Misfortune cookies',
   description: 'The news ticker may occasionally have <b>misfortunes</b>, which may be clicked for "something".',
   quote: "These taste quite bad — but then again, what's even the point?",
   price: 66666666666,
   icon: [0, 1],
   parents: ['Distilled essence of redoubled luck'],
   position: [75, 495],
   order: 644,
  },
 ]);
};

export default createHook;
