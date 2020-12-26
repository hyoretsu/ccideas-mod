declare namespace Game {
 export interface Upgrade {
  mod: 'ccreddit_mod';
  posX?: number;
  posY?: number;
 }

 export const PrestigeUpgrades: Upgrade[];
 export const Upgrades: undefined[] & Record<string, Upgrade>;
 export const UpgradesById: Upgrade[];
}
