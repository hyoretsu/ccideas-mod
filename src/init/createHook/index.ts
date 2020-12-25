import { HeavenlyUpgrades } from 'customFuncs';

const createHook = (): void => {
 HeavenlyUpgrades([
  {
   name: 'Misfortune cookies',
   description: 'The news ticker may occasionally have <b>misfortunes</b>, which may be clicked for "something".',
   quote: '',
   price: 66666666666,
   icon: [0, 1],
   parents: ['Distilled essence of redoubled luck'],
   position: [75, 495],
   order: 644,
  },
 ]);
};

export default createHook;
