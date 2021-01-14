import checkHookContent from './checkHook';
import cookiesPerClickHookContent from './cookiesPerClickHook';
import cpsHookContent from './cpsHook';
import createHook from './createHook';
import customMods from './customMods';

const init = (): void => {
 customMods();
 Game.registerHook('check', checkHookContent);
 Game.registerHook('cookiesPerClick', cookiesPerClickHookContent);
 Game.registerHook('cps', cpsHookContent);
 createHook();
};

export default init;
