import { HeavenlyUpgrades } from 'customFuncs';

const createHook = (): void => {
 HeavenlyUpgrades([
  {
   name: 'Misfortune cookies',
   description: 'The news ticker may occasionally have <b>misfortunes</b>, which may be clicked for "something".',
   quote: '',
   price: 666.666666,
   icon: [0, 1],
   parents: ['Fortune cookies'],
   position: [-173, 147],
  },
 ]);
};

export default createHook;
