import init from './init';
import save from './save';
import load from './load';
import { HeavenlyUpgrades } from './customFuncs';

const CCRedditMod: Game.Mod = {
 init,
 save,
 load,
 HeavenlyUpgrades,
};

Game.registerMod('ccreddit_mod', CCRedditMod);
