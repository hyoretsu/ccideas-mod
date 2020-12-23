import init from './init';
import save from './save';
import load from './load';
import { HeavenlyUpgrades } from './customFuncs';

const CCRedditMod: Game.Mod = {
 name: 'ccreddit_mod',
 init,
 save,
 load,
 HeavenlyUpgrades,
};

Game.registerMod(CCRedditMod.name, CCRedditMod);
