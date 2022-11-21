import { modName } from './config';
import init from './init';
import load from './load';
import save from './save';

const CCIdeas: Game.Mod = {
    init,
    save,
    load,
};

Game.registerMod(modName, CCIdeas);
