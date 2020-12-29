import init from './init';
import save from './save';
import load from './load';

const CCIdeas: Game.Mod = {
 init,
 save,
 load,
};

Game.registerMod(process.env.MOD_NAME, CCIdeas);
