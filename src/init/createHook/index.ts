import { TieredUpgrades, HeavenlyUpgrades } from 'customFuncs';
import { misfortunePrice } from '../customMods';

const misfortuneName = 'misfortune';
const misfortunePriceFunc: PriceFunc = upgrade => {
 return Math.min(upgrade.basePrice, Game.unbuffedCps * 60 * 60 * 24);
};
const misfortuneOrder = 19101;

const createHook = (): void => {
 TieredUpgrades([
  {
   name: 'Misfortune #501',
   description: 'Cursors are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.',
   quote: 'The decay of a finger will leave 4 others still pointing.',
   icon: [3, 0],
   building: 'Cursor',
   tier: misfortuneName,
   order: misfortuneOrder,
  },
  // Missing quote
  {
   name: 'Misfortune #502',
   description: 'Grandmas are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.',
   quote: 'test',
   icon: [4, 0],
   building: 'Grandma',
   tier: misfortuneName,
   order: misfortuneOrder,
  },
  // Missing quote
  {
   name: 'Misfortune #503',
   description: 'Farms are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.',
   quote: 'test',
   icon: [5, 0],
   building: 'Farm',
   tier: misfortuneName,
   order: misfortuneOrder,
  },
  // Missing quote
  {
   name: 'Misfortune #504',
   description: 'Mines are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.',
   quote: 'test',
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
   quote: 'No idol deservers worship.',
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
  // Missing quote
  {
   name: 'Misfortune #510',
   description: 'Alchemy labs are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.',
   quote: 'test',
   icon: [12, 0],
   building: 'Alchemy lab',
   tier: misfortuneName,
   order: misfortuneOrder,
  },
  // Missing quote
  {
   name: 'Misfortune #511',
   description: 'Portals are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.',
   quote: 'test',
   icon: [13, 0],
   building: 'Portal',
   tier: misfortuneName,
   order: misfortuneOrder,
  },
  // Missing quote
  {
   name: 'Misfortune #512',
   description: 'Time machines are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.',
   quote: 'test',
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
  // Missing quote
  {
   name: 'Misfortune #515',
   description: 'Chancemakers are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.',
   quote: 'test',
   icon: [17, 0],
   building: 'Chancemaker',
   tier: misfortuneName,
   order: misfortuneOrder,
  },
  // Missing quote
  {
   name: 'Misfortune #516',
   description: 'Fractal engines are 6% cheaper and 6% more efficient during the last stage of Grandmapocalypse.',
   quote: 'test',
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
  // Missing quote
  {
   name: 'Misfortune #602',
   description:
    'You gain <b>+1%</b> of your regular CpS while the game is closed <small>(provided you have the Twin Gates of Transcendence heavenly upgrade)</small>.',
   quote: 'test',
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
  // Missing quote
  {
   name: 'Misfortune #604',
   description: 'Clicking gains <b>+1% of your CpS</b>.',
   quote: 'test',
   price: misfortunePrice * 1e11,
   priceFunc: misfortunePriceFunc,
   icon: [2, 0],
   tier: misfortuneName,
   order: misfortuneOrder,
  },
  // Missing quote
  // {
  //  name: 'Misfortune #666',
  //  description: 'Grandmas are <b>twice</b> as efficient.',
  // quote: 'test',
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
