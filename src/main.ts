const CCRedditMod: Game.Mod = {
 name: 'ccreddit_mod',
};

// Called as soon as the mod is registered, used to declare hooks
CCRedditMod.init = () => {
 // Called every few seconds to check for upgrade/achievement unlock conditions
 Game.registerHook('check', () => {});
 // Called when the big cookie is clicked
 Game.registerHook('click', () => {});
 // Called when determining the cookies per click
 Game.registerHook('cookiesPerClick', () => {});
 // Called when determining the CpS
 Game.registerHook('cps', (cps: number) => {
  return cps;
 });
 // Called after registering buildings/upgrades/achievements, use it to create custom content
 Game.registerHook('create', () => {});
 // Called every draw tick
 Game.registerHook('draw', () => {});
 // Called every logic tick
 Game.registerHook('logic', () => {});
 // Called when the player reincarnates after an ascension
 Game.registerHook('reincarnate', () => {});
 // Called whenever the player resets; parameter is true for hard reset and false for ascension
 Game.registerHook('reset', (state: boolean) => {
  if (state === false) {
  }
  if (state === true) {
  }
 });
 // Called when determining news ticker text
 Game.registerHook('ticker', () => {
  return [''];
 });
};

// Use this to store persistent data associated with your mod
CCRedditMod.save = () => {
 return JSON.stringify({});
};

// Do stuff with the string returned in save()
CCRedditMod.load = (save: string) => {};

Game.registerMod(CCRedditMod.name, CCRedditMod);
