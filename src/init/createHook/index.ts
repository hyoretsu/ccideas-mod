import { TieredUpgrades, HeavenlyUpgrades } from 'customFuncs';
import { misfortunePrice } from '../customMods';

const auraName = 'aura';
const luminousName = 'luminous';
const misfortuneName = 'misfortune';
const misfortunePriceFunc: PriceFunc = upgrade => {
 return Math.min(upgrade.basePrice, Game.unbuffedCps * 60 * 60 * 24);
};
const misfortuneOrder = 19101;

const createHook = (): void => {
 TieredUpgrades([
  // Aura tier
  {
   name: 'Aura furnaces',
   description: 'Grandmas are <b>twice</b> as efficient.',
   quote:
    'Your grandmas have successfully mastered the art of baking, and are now able to use their aura to aid them in the process.',
   icon: [4, 3],
   building: 'Grandma',
   tier: auraName,
  },
  {
   name: 'Aura seeds',
   description: 'Farms are <b>twice</b> as efficient.',
   quote:
    'Your farmers have successfully mastered the art of farming, and are now able to infuse their seeds with aura to make them grow faster.',
   icon: [5, 3],
   building: 'Farm',
   tier: auraName,
  },
  {
   name: 'Aura pickaxes',
   description: 'Mines are <b>twice</b> as efficient.',
   quote: 'Your miners are now able to infuse their pickaxes with aura, making them harder than ever!',
   icon: [6, 3],
   building: 'Mine',
   tier: auraName,
  },
  {
   name: 'Aura cogs',
   description: 'Factories are <b>twice</b> as efficient.',
   quote:
    'These are the epitome of all cogs, created by bending a power called aura to your will and manipulating it to create cogs. They have the perfect amount of friction.',
   icon: [7, 3],
   building: 'Factory',
   tier: auraName,
  },
  {
   name: 'Aura cash',
   description: 'Banks are <b>twice</b> as efficient.',
   quote:
    'Your bankers have developed a new technique of infusing a certain type of aura into cookies, making their currency even more reliable!',
   icon: [8, 3],
   building: 'Bank',
   tier: auraName,
  },
  {
   name: 'Aura-filled temples',
   description: 'Temples are <b>twice</b> as efficient.',
   quote:
    'After many years of devoting themselves, the followers have started to awaken a power called aura. Praying while cultivating it pleases the gods even more.',
   icon: [9, 3],
   building: 'Temple',
   tier: auraName,
  },
  {
   name: 'Aura spells',
   description: 'Wizard towers are <b>twice</b> as efficient.',
   quote: 'Using aura as an extra source source of mana, wizards can now summon twice as much cookies.',
   icon: [10, 3],
   building: 'Wizard tower',
   tier: auraName,
  },
  {
   name: 'Aura fuel',
   description: 'Shipments are <b>twice</b> as efficient.',
   quote: 'Having no need for aura themselves, astronauts distilled it into their fuel, making it even more efficient.',
   icon: [11, 3],
   building: 'Shipment',
   tier: auraName,
  },
  {
   name: 'Aura transmutation',
   description: 'Alchemy labs are <b>twice</b> as efficient.',
   quote:
    'Through your vast comprehension of the alchemical laws, you are now able to create cookies from your own qi.',
   icon: [12, 3],
   building: 'Alchemy lab',
   tier: auraName,
  },
  {
   name: 'Aura portals',
   description: 'Portals are <b>twice</b> as efficient.',
   quote: 'Through your comprehension of the Space Dao, you can now create portals using your qi.',
   icon: [13, 3],
   building: 'Portal',
   tier: auraName,
  },
  {
   name: 'Aura travel',
   description: 'Time machines are <b>twice</b> as efficient.',
   quote: 'Through your comprehension of the Time Dao, you can now travel through time using your qi.',
   icon: [14, 3],
   building: 'Time machine',
   tier: auraName,
  },
  // Seriously?
  {
   name: 'Aura condensers',
   description: 'Antimatter condensers are <b>twice</b> as efficient.',
   icon: [15, 3],
   building: 'Antimatter condenser',
   tier: auraName,
  },
  {
   name: 'Aura prism',
   description: 'Prisms are <b>twice</b> as efficient.',
   quote: "Well, light is energy, isn't it? Now you're making cookies from aura.",
   icon: [16, 3],
   building: 'Prism',
   tier: auraName,
  },
  {
   name: 'Aura dice',
   description: 'Chancemakers are <b>twice</b> as efficient.',
   quote: "Yes, you've found a way to use your comprehension of the world to affect your luck and get more cookies.",
   icon: [17, 3],
   building: 'Chancemaker',
   tier: auraName,
  },
  // Seriously?
  {
   name: 'Aura fractals',
   description: 'Fractal engines are <b>twice</b> as efficient.',
   icon: [18, 3],
   building: 'Fractal engine',
   tier: auraName,
  },
  {
   name: 'Aura hardware',
   description: 'Javascript consoles are <b>twice</b> as efficient.',
   quote: "It's an algorithm, I swear! It really doubles your cookie production. Don't ask how it works.",
   icon: [19, 3],
   building: 'Javascript console',
   tier: auraName,
  },
  {
   name: 'Aura multiverse',
   description: 'Idleverses are <b>twice</b> as efficient.',
   quote:
    "It is said that when one's understanding of the Martial Dao gets too profound, an ocean starts forming inside of his own body, eventually becoming a full-fledged world",
   icon: [20, 3],
   building: 'Idleverse',
   tier: auraName,
  },
  // Luminous tier
  {
   name: 'Luminous grandmas',
   description: 'Grandmas are <b>twice</b> as efficient.',
   quote: 'Your grandmas have called their long-lost relatives to help them bake more cookies.',
   icon: [4, 4],
   building: 'Grandma',
   tier: luminousName,
  },
  {
   name: 'Luminous seeds',
   description: 'Farms are <b>twice</b> as efficient.',
   quote:
    "Through your advancements in the field of agriculture, you've discovered some sort of luminescent seed. It's still unclear whether it's safe or not, but it yields more crops than normal ones.",
   icon: [5, 4],
   building: 'Farm',
   tier: luminousName,
  },
  {
   name: 'Luminous refining',
   description: 'Mines are <b>twice</b> as efficient.',
   quote:
    'By mixing the cookie dough you mine with a mysterious luminescent powder, you are able to make them yield more and become tastier.',
   icon: [6, 4],
   building: 'Mine',
   tier: luminousName,
  },
  {
   name: 'Luminous labor',
   description: 'Factories are <b>twice</b> as efficient.',
   quote:
    "By doing some shenanigans to a strange luminous powder that was recently discovered, you managed to create an entirely new workforce. They're fast, efficient and don't need to rest!",
   icon: [7, 4],
   building: 'Factory',
   tier: luminousName,
  },
  {
   name: 'Luminous cash',
   description: 'Banks are <b>twice</b> as efficient.',
   quote:
    "You've created a new currency coated in a strange luminous powder. You don't really know what it is or where it came from, but gold is shiny, so it's obviously more valuable, right?",
   icon: [8, 4],
   building: 'Bank',
   tier: luminousName,
  },
  {
   name: 'Luminous temples',
   description: 'Temples are <b>twice</b> as efficient.',
   quote: 'This strange powder shines. You put it all around your temples. Gods like shiny things.',
   icon: [9, 4],
   building: 'Temple',
   tier: luminousName,
  },
  {
   name: 'Luminous catalyst',
   description: 'Wizard towers are <b>twice</b> as efficient.',
   quote:
    'Wizards have discovered that by condensing mana, they are able to make a mysterious luminescent powder. This, in turn, is highly effective as a catalyst when using spells.',
   icon: [10, 4],
   building: 'Wizard tower',
   tier: luminousName,
  },
  {
   name: 'Luminous fuel',
   description: 'Shipments are <b>twice</b> as efficient.',
   quote:
    'By mixing normal fuel and a solution of a mysterious luminous powder and alchohol, the fuel becomes highly more potent.',
   icon: [11, 4],
   building: 'Shipment',
   tier: luminousName,
  },
  {
   name: 'Luminous transmutation',
   description: 'Alchemy labs are <b>twice</b> as efficient.',
   quote: "This mysterious luminous powder is very dense, so you're able transmute it into a lot more cookies.",
   icon: [12, 4],
   building: 'Alchemy lab',
   tier: luminousName,
  },
  {
   name: 'Luminous portal',
   description: 'Portals are <b>twice</b> as efficient.',
   quote: "The portal to Heaven will surely have a godly light, right? And it'll obviously be packed with cookies.",
   icon: [13, 4],
   building: 'Portal',
   tier: luminousName,
  },
  {
   name: 'Luminous time travel',
   description: 'Time machines are <b>twice</b> as efficient.',
   quote:
    "By using a strange luminous powder in your time machines, you can know where exactly you're going in spacetime more precisely. Yes, it works. Don't ask how.",
   icon: [14, 4],
   building: 'Time machine',
   tier: luminousName,
  },
  // Seriously?
  {
   name: 'Luminous condensers',
   description: 'Antimatter condensers are <b>twice</b> as efficient.',
   icon: [15, 4],
   building: 'Antimatter condenser',
   tier: luminousName,
  },
  {
   name: 'Luminous prism',
   description: 'Prisms are <b>twice</b> as efficient.',
   quote:
    "Well, you convert light into cookies. So if the prism is coated in luminous powder it'll obviously create more cookies.",
   icon: [16, 4],
   building: 'Prism',
   tier: luminousName,
  },
  {
   name: 'Luminous dice',
   description: 'Chancemakers are <b>twice</b> as efficient.',
   quote:
    "Now there are sparks whenever you spawn cookies. It's entertaining, which in turn makes people do it more often.",
   icon: [17, 4],
   building: 'Chancemaker',
   tier: luminousName,
  },
  // Seriously?
  {
   name: 'Luminous fractals',
   description: 'Fractal engines are <b>twice</b> as efficient.',
   icon: [18, 4],
   building: 'Fractal engine',
   tier: luminousName,
  },
  {
   name: 'Luminous hardware',
   description: 'Javascript consoles are <b>twice</b> as efficient.',
   quote: 'Hey, it works okay? RGB mice and keyboard boost computer performance.',
   icon: [19, 4],
   building: 'Javascript console',
   tier: luminousName,
  },
  {
   name: 'Luminous universe',
   description: 'Idleverses are <b>twice</b> as efficient.',
   quote:
    'Brand new galaxies to explore, full with a strange luminous material everywhere... Regardless, that means tons of extra cookies to get!',
   icon: [20, 4],
   building: 'Idleverse',
   tier: luminousName,
  },
  // Misfortune tier
  {
   name: 'Misfortune #501',
   description: 'Cursors are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.',
   quote: 'The decay of a finger will leave 4 others still pointing.',
   icon: [3, 0],
   building: 'Cursor',
   tier: misfortuneName,
   order: misfortuneOrder,
  },
  {
   name: 'Misfortune #502',
   description: 'Grandmas are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.',
   quote: 'A wrinkle is a crack on the only home you have.',
   icon: [4, 0],
   building: 'Grandma',
   tier: misfortuneName,
   order: misfortuneOrder,
  },
  {
   name: 'Misfortune #503',
   description: 'Farms are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.',
   // Kiz3r's
   quote: 'Famine is inevitable.',
   icon: [5, 0],
   building: 'Farm',
   tier: misfortuneName,
   order: misfortuneOrder,
  },
  {
   name: 'Misfortune #504',
   description: 'Mines are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.',
   // Kiz3r's
   quote: "The collapse under your life's work.",
   icon: [6, 0],
   building: 'Mine',
   tier: misfortuneName,
   order: misfortuneOrder,
  },
  {
   name: 'Misfortune #505',
   description: 'Factories are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.',
   quote: 'True worth is not in what you make yourself, but in what you make others do for you.',
   icon: [7, 0],
   building: 'Factory',
   tier: misfortuneName,
   order: misfortuneOrder,
  },
  {
   name: 'Misfortune #506',
   description: 'Banks are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.',
   quote: 'The value of money means everything to a banker.',
   icon: [8, 0],
   building: 'Bank',
   tier: misfortuneName,
   order: misfortuneOrder,
  },
  {
   name: 'Misfortune #507',
   description: 'Temples are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.',
   quote: 'No idol deserves worship.',
   icon: [9, 0],
   building: 'Temple',
   tier: misfortuneName,
   order: misfortuneOrder,
  },
  {
   name: 'Misfortune #508',
   description: 'Wizard towers are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.',
   quote: 'Magic is about two things — deceiving and pleasing.',
   icon: [10, 0],
   building: 'Wizard tower',
   tier: misfortuneName,
   order: misfortuneOrder,
  },
  {
   name: 'Misfortune #509',
   description: 'Shipments are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.',
   quote: 'Every mile travelled maddens you just as much',
   icon: [11, 0],
   building: 'Shipment',
   tier: misfortuneName,
   order: misfortuneOrder,
  },
  {
   name: 'Misfortune #510',
   description: 'Alchemy labs are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.',
   // Kiz3r's
   quote: "You're turning diamonds into coal.",
   icon: [12, 0],
   building: 'Alchemy lab',
   tier: misfortuneName,
   order: misfortuneOrder,
  },
  {
   name: 'Misfortune #511',
   description: 'Portals are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.',
   // Kiz3r's
   quote: 'Welcoming unwanted visitors.',
   icon: [13, 0],
   building: 'Portal',
   tier: misfortuneName,
   order: misfortuneOrder,
  },
  {
   name: 'Misfortune #512',
   description: 'Time machines are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.',
   // Kiz3r's
   quote: 'You cannot run from time.',
   icon: [14, 0],
   building: 'Time machine',
   tier: misfortuneName,
   order: misfortuneOrder,
  },
  {
   name: 'Misfortune #513',
   description: 'Antimatter condensers are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.',
   quote: 'The world is made of what we take from it.',
   icon: [15, 0],
   building: 'Antimatter condenser',
   tier: misfortuneName,
   order: misfortuneOrder,
  },
  {
   name: 'Misfortune #514',
   description: 'Prisms are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.',
   quote: 'Staring at endless darkness can blind you forever from the light.',
   icon: [16, 0],
   building: 'Prism',
   tier: misfortuneName,
   order: misfortuneOrder,
  },
  {
   name: 'Misfortune #515',
   description: 'Chancemakers are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.',
   // Kiz3r's
   quote: "Life's the gamble you will never win.",
   icon: [17, 0],
   building: 'Chancemaker',
   tier: misfortuneName,
   order: misfortuneOrder,
  },
  {
   name: 'Misfortune #516',
   description: 'Fractal engines are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.',
   // Kiz3r's
   quote: 'Losing yourself by finding others.',
   icon: [18, 0],
   building: 'Fractal engine',
   tier: misfortuneName,
   order: misfortuneOrder,
  },
  {
   name: 'Misfortune #517',
   description: 'Javascript consoles are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.',
   quote: "If things are working in your computer, they won't in others'",
   icon: [19, 0],
   building: 'Javascript console',
   tier: misfortuneName,
   order: misfortuneOrder,
  },
  {
   name: 'Misfortune #518',
   description: 'Idleverses are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.',
   quote: 'There are too many of everyone, including you.',
   icon: [20, 0],
   building: 'Idleverse',
   tier: misfortuneName,
   order: misfortuneOrder,
  },
  {
   name: 'Misfortune #600',
   description: 'Upgrades and buildings cost <b>-1%</b>; you gain <b>+1%</b> CpS.',
   quote: 'True poverty is counted in betrayals.',
   price: misfortunePrice * 1e5,
   priceFunc: misfortunePriceFunc,
   icon: [0, 0],
   tier: misfortuneName,
   order: misfortuneOrder,
  },
  {
   name: 'Misfortune #601',
   description: 'You gain <b>+6%</b> CpS.',
   quote: 'Some people dream of escaping misery; others dream of cookies.',
   price: misfortunePrice * 1e8,
   priceFunc: misfortunePriceFunc,
   icon: [0, 0],
   tier: misfortuneName,
   order: misfortuneOrder,
  },
  {
   name: 'Misfortune #602',
   description:
    'You gain <b>+1%</b> of your regular CpS while the game is closed <small>(provided you have the Twin Gates of Transcendence heavenly upgrade)</small>.',
   // Kiz3r's
   quote: "Help, I'm trapped in a CC mod!",
   price: misfortunePrice * 1e11,
   priceFunc: misfortunePriceFunc,
   icon: [0, 0],
   tier: misfortuneName,
   order: misfortuneOrder,
  },
  {
   name: 'Misfortune #603',
   description: 'You gain <b>more CpS</b> the more milk you have.',
   quote: 'Believe the superstitions; black cats are bad luck.',
   price: misfortunePrice * 1e14,
   priceFunc: misfortunePriceFunc,
   icon: [1, 0],
   tier: misfortuneName,
   kitten: true,
   order: misfortuneOrder,
  },
  {
   name: 'Misfortune #604',
   description: 'Clicking gains <b>+1% of your CpS</b>.',
   // Think of something better
   quote: 'Remember to not stay in touch.',
   price: misfortunePrice * 1e11,
   priceFunc: misfortunePriceFunc,
   icon: [2, 0],
   tier: misfortuneName,
   order: misfortuneOrder,
  },
  // {
  //  name: 'Misfortune #666',
  //  description: 'Grandmas are <b>twice</b> as efficient.',
  //  // Kiz3r's
  //  quote: 'Old but not wise.',
  //  price: 6.666e51,
  //  icon: [19, 2],
  //  tier: misfortuneName,
  //  order: misfortuneOrder,
  // },
 ]);
 HeavenlyUpgrades([
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
