import { modName } from './config';
import init from './init';
import save from './save';
import load from './load';

const CCIdeas: Game.Mod = {
 init,
 save,
 load,
};

Game.registerMod(modName, CCIdeas);
